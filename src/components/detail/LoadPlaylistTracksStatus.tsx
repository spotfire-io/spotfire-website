import React from "react";
import { Typography, Button } from "@material-ui/core";

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
import { useMutation } from "react-apollo";
import { ApolloQueryResult } from "apollo-boost";

interface Props {
  playlist: PlaylistDetails_playlist;
  startPolling: (pollInterval: number) => void;
  stopPolling: () => void;
  refetch: (
    variables?: PlaylistDetailsVariables | undefined
  ) => Promise<ApolloQueryResult<PlaylistDetails>>;
}

const loadMutation = (playlist: PlaylistDetails_playlist) => {
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

const LoadPlaylistTracksStatus = ({
  playlist,
  startPolling,
  stopPolling,
  refetch,
}: Props) => {
  const { id, latest_snapshot } = playlist;
  if (!latest_snapshot) {
    return <Typography>Error: No Snapshot Found!</Typography>;
  }

  switch (latest_snapshot.status) {
    case "INITIALIZED": {
      const [mutation] = loadMutation(playlist);
      return (
        <Button
          onClick={e => {
            mutation();
            refetch({ upsert: false });
            startPolling(500);
          }}
        >
          Load Playlist Tracks
        </Button>
      );
      break;
    }
    case "LOADING": {
      return <Typography>LOADING!</Typography>;
      break;
    }
    case "LOADED": {
      stopPolling();
      return <Typography>LOADED!</Typography>;
      break;
    }
    default: {
      return (
        <Typography>
          Error: Unhandled Status {latest_snapshot.status}
        </Typography>
      );
      break;
    }
  }
};

export default LoadPlaylistTracksStatus;
