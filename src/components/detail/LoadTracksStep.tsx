import React from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";

import {
  PlaylistDetails,
  PlaylistDetailsVariables,
} from "../../queries/types/PlaylistDetails";
import playlistDetailsQuery from "../../queries/PlaylistDetails";
import { useQuery } from "react-apollo";
import ErrorMessage from "../common/ErrorMessage";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {
  playlistId: string;
}

export const LoadTracksStep = ({ playlistId }: Props) => {
  const { data, error, loading } = useQuery<
    PlaylistDetails,
    PlaylistDetailsVariables
  >(playlistDetailsQuery, {
    variables: { id: playlistId, upsert: false },
    pollInterval: 500,
  });
  if (error) {
    return <ErrorMessage error={error} />;
  } else if (loading) {
    return <LoadingMessage message="Please wait" />;
  } else if (data) {
    const snapshot = data.playlist.latest_snapshot;
    if (snapshot) {
      const { track_count, loaded_tracks } = snapshot;
      const progress = loaded_tracks / track_count;

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
              Loaded <strong>{loaded_tracks}</strong> out of{" "}
              <strong>{track_count}</strong> playlist tracks
            </Typography>
          </Grid>
        </>
      );
    }
  } else {
    return (
      <ErrorMessage
        error={new Error(`Could not find latest snapshot for playlist`)}
      />
    );
  }
};
