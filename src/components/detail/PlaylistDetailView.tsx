import { RouteComponentProps } from "@reach/router";
import React, { Suspense } from "react";
import { Typography, Button, Theme, SnackbarContent } from "@material-ui/core";
import {
  PlaylistDetails,
  PlaylistDetailsVariables,
} from "../../queries/types/PlaylistDetails";
import _ from "lodash";
import playlistDetailsQuery from "../../queries/PlaylistDetails";
import { useQuery } from "react-apollo";
import { makeStyles } from "@material-ui/styles";
import LoadPlaylistTracksStatus from "./LoadPlaylistTracksStatus";
import LoadingDialog from "../common/LoadingDialog";
import { ErrorMessage } from "../common/ErrorMessage";

interface Props extends RouteComponentProps {
  id?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: "#fff",
    padding: "8px 24px",
    borderRadius: 500,
    boxShadow: "none",
    fontWeight: 600,
    marginTop: 15,
    marginBottom: 15,
  },
}));

const PlaylistDetailView = ({ id }: Props) => {
  const classes = useStyles();

  const { loading, error, data, startPolling, stopPolling, refetch } = useQuery<
    PlaylistDetails,
    PlaylistDetailsVariables
  >(playlistDetailsQuery, {
    variables: { id, upsert: true },
  });
  if (loading) {
    return <LoadingDialog message="Loading Playlist Details..." />;
  } else if (error || !data) {
    return <ErrorMessage error={error} data={data} />;
  } else {
    const { playlist } = data;
    const { latest_snapshot: snapshot } = playlist;
    return (
      <>
        <img
          src={_.get(
            playlist,
            "image.url",
            "//images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80"
          )}
        />
        <Typography variant="h4">{playlist.name}</Typography>
        <Typography variant="h6">by {playlist.owner.display_name}</Typography>

        <Typography variant="body2">
          Loaded Tracks {snapshot!.loaded_tracks}/{snapshot!.track_count}
        </Typography>
        <LoadPlaylistTracksStatus
          playlist={playlist}
          startPolling={startPolling}
          stopPolling={stopPolling}
          refetch={refetch}
        />
      </>
    );
  }
};

export default PlaylistDetailView;
