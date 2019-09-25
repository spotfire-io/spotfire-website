import React from "react";

import NumberFormat from "react-number-format";
import Maybe from "graphql/tsutils/Maybe";
import {
  Grid,
  Typography,
  LinearProgress,
  Theme,
  makeStyles,
} from "@material-ui/core";

import { PlaylistSnapshot } from "../../graphql";

import PlaylistDetailCard, {
  PlaylistCardDetails,
} from "../common/PlaylistDetailCard";

export type LoadPlaylistTrackStatusData = PlaylistCardDetails & {
  latest_snapshot: Maybe<
    Pick<PlaylistSnapshot, "track_count" | "loaded_tracks">
  >;
};

interface StatusViewProps {
  playlist: LoadPlaylistTrackStatusData;
}

const useStyles = makeStyles((theme: Theme) => ({
  progressBar: {
    width: 400,
    paddingTop: "2em",
    margin: "2em 0",
    // height: 50,
  },
}));

export const LoadPlaylistTracksStatus = ({ playlist }: StatusViewProps) => {
  const classes = useStyles();
  const snapshot = playlist.latest_snapshot!;
  const { track_count, loaded_tracks } = snapshot;
  const progress = loaded_tracks / track_count;
  return (
    <>
      <PlaylistDetailCard playlist={playlist} />
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <LinearProgress
            color="primary"
            variant="determinate"
            value={progress * 100}
            className={classes.progressBar}
          />
        </Grid>
        <Grid>
          <Typography align="center" variant="body2">
            Loaded <strong>{loaded_tracks}</strong> out of{" "}
            <strong>{track_count}</strong> playlist tracks.{" "}
            <NumberFormat
              value={progress * 100}
              prefix="("
              suffix="%)"
              decimalScale={1}
              displayType={"text"}
              fixedDecimalScale={true}
            />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LoadPlaylistTracksStatus;
