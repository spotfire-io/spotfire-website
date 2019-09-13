import React, { useState } from "react";
import {
  Typography,
  Button,
  Theme,
  Grid,
  LinearProgress,
} from "@material-ui/core";
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
  const [status, setStatus] = useState(snapshot.status);

  const [loadTracksMutation] = useLoadTracksMutation(playlist);
  const [optimizeMutation, optimizeJobData] = useStartOptimizationJobMutation(
    playlist
  );

  if (status == "LOADING") {
    startPolling(500);
  }

  if (!snapshot) {
    return <Typography>Error: No Snapshot Found!</Typography>;
  }

  const { loaded_tracks: loadedTracks, track_count: totalTracks } = snapshot;
  const progress = loadedTracks / totalTracks;

  switch (status) {
    case PlaylistSnapshotStatus.INITIALIZED: {
      return (
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={e => {
            loadTracksMutation();
            refetch({ upsert: false });
            setStatus(PlaylistSnapshotStatus.LOADING);
          }}
        >
          Load {totalTracks} Playlist Tracks
        </Button>
      );
      break;
    }
    case PlaylistSnapshotStatus.LOADING: {
      // return <Typography>LOADING!</Typography>;
      return (
        <>
          <Grid item xs={3}></Grid>
          <Grid item xs={5}>
            <Typography align="center" variant="body2">
              <LinearProgress
                color="primary"
                variant="determinate"
                value={progress * 100}
                style={{ paddingTop: "2em", margin: "2em 0" }}
              />
              Loaded <strong>{loadedTracks}</strong> out of{" "}
              <strong>{totalTracks}</strong> playlist tracks
            </Typography>
          </Grid>
        </>
      );
      break;
    }
    case PlaylistSnapshotStatus.LOADED: {
      stopPolling();
      if (optimizeJobData.called == false || optimizeJobData.loading == true) {
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
