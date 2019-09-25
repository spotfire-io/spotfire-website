import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, Grid, Typography } from "@material-ui/core";
import _ from "lodash";

import { Playlist, User } from "../../graphql";

export type PlaylistCardDetails = Pick<Playlist, "image" | "name"> & {
  owner: Pick<User, "display_name" | "id">;
};

interface Props {
  playlist: PlaylistCardDetails;
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
  image: {
    maxWidth: 300,
    margin: theme.spacing(3),
  },
}));

const defaultPhoto =
  "//images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80";

export const PlaylistDetailCard = ({ playlist }: Props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        <img
          className={classes.image}
          src={_.get(playlist, "image.url", defaultPhoto)}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h4">
          {playlist.name}
        </Typography>
        <Typography align="center" variant="h6">
          Created by {playlist.owner.display_name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PlaylistDetailCard;
