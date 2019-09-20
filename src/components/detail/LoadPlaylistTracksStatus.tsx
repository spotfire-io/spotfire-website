import React, { useState } from "react";
import { Typography, Button, Theme } from "@material-ui/core";
import _ from "lodash";

import loadPlaylistTracksQuery from "../../queries/LoadPlaylistTracks";
import {
  LoadPlaylistTracks,
  LoadPlaylistTracksVariables,
} from "../../queries/types/LoadPlaylistTracks";
import { PlaylistSnapshotStatus } from "../../../types/globalTypes";
import {
  PlaylistDetails,
  PlaylistDetailsVariables,
  PlaylistDetails_playlist,
} from "../../queries/types/PlaylistDetails";
import playlistDetailsQuery from "../../queries/PlaylistDetails";
import startPlaylistOptimizationQuery from "../../queries/StartPlaylistOptimization";

import {
  StartPlaylistOptimization,
  StartPlaylistOptimizationVariables,
} from "../../queries/types/StartPlaylistOptimization";

import { useMutation } from "react-apollo";
import { ApolloQueryResult } from "apollo-boost";
import { makeStyles } from "@material-ui/styles";
import { ErrorMessage } from "../common/ErrorMessage";
import { redirectTo } from "@reach/router";
import { navigateTo } from "gatsby";
import LoadingDialog from "../common/LoadingDialog";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: "#fff",
    padding: "19px 56px",
    borderRadius: 500,
    boxShadow: "none",
    fontWeight: 800,
    marginTop: theme.spacing(6),
  },
}));

interface Props {
  playlist: PlaylistDetails_playlist;
  startPolling: (pollInterval: number) => void;
  stopPolling: () => void;
  refetch: (
    variables?: PlaylistDetailsVariables | undefined
  ) => Promise<ApolloQueryResult<PlaylistDetails>>;
}

const useLoadTracksMutation = (playlist: PlaylistDetails_playlist) => {
  const { id } = playlist;
  const { latest_snapshot: snapshot } = playlist;
  if (!snapshot) {
    throw new Error(`Latest snapshot not found for playlist ${id}`);
  }
  return useMutation<LoadPlaylistTracks, LoadPlaylistTracksVariables>(
    loadPlaylistTracksQuery,
    { variables: { id } }
  );
};

const useStartOptimizationJobMutation = (
  playlist: PlaylistDetails_playlist
) => {
  const { id } = playlist;
  const { latest_snapshot: snapshot } = playlist;
  if (!snapshot) {
    throw new Error(`Latest snapshot not found for playlist ${id}`);
  }
  return useMutation<
    StartPlaylistOptimization,
    StartPlaylistOptimizationVariables
  >(startPlaylistOptimizationQuery, {
    variables: {
      playlistId: id,
      snapshotId: snapshot.id,
      playlistName: `${playlist.name} (Spotfired)`,
    },
  });
};

const POLL_INTERVAL = 1000;

const LoadPlaylistTracksStatus = ({
  playlist,
  startPolling,
  stopPolling,
  refetch,
}: Props) => {
  const classes = useStyles();

  const { id, latest_snapshot: snapshot } = playlist;

  if (!snapshot) {
    return <ErrorMessage error={new Error("No snapshot found for playlist")} />;
  }
  const [pending, setPending] = useState(false);
  const status = snapshot.status;

  const [
    loadTracksMutation,
    { data, error: loadTracksError, loading },
  ] = useLoadTracksMutation(playlist);

  if (loadTracksError) {
    return <ErrorMessage error={loadTracksError} />;
  }
  const [optimizeMutation, optimizeJobData] = useStartOptimizationJobMutation(
    playlist
  );

  if (status == "LOADING") {
    startPolling(POLL_INTERVAL);
  }

  if (!snapshot) {
    return <Typography>Error: No Snapshot Found!</Typography>;
  }

  const { loaded_tracks: loadedTracks, track_count: totalTracks } = snapshot;
  const progress = loadedTracks / totalTracks;

  switch (status) {
    case "INITIALIZED": {
      return (
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={e => {
            loadTracksMutation();
            refetch({ upsert: false });
            startPolling(POLL_INTERVAL);
            setPending(true);
            // setStatus(PlaylistSnapshotStatus.LOADING);
          }}
        >
          Load {totalTracks} Playlist Tracks
        </Button>
      );
      break;
    }
    case "LOADING": {
      break;
    }
    case "LOADED": {
      if (optimizeJobData.called == false || optimizeJobData.loading == true) {
        stopPolling();
        return (
          <>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={e => {
                optimizeMutation();
              }}
            >
              Optimize Playlist
            </Button>
          </>
        );
      } else if (optimizeJobData.error) {
        return <ErrorMessage error={optimizeJobData.error} />;
      } else {
        const data = _.get(optimizeJobData, "data.startPlaylistOptimization");
        if (data != undefined) {
          navigateTo(`/jobs/${data.id}`);
          return (
            <LoadingDialog message="Forwarding You to Your Optimization Job..." />
          );
        } else {
          const error = new Error(
            "startOptimizationJob mutation returned no data"
          );
          return <ErrorMessage error={error} />;
        }
      }
      break;
    }
    default: {
      return <Typography>Error: Unhandled Status {snapshot.status}</Typography>;
      break;
    }
  }
};

export default LoadPlaylistTracksStatus;
