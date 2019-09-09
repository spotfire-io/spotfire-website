import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardContent,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import { PlaylistSearch_playlists } from "../../queries/types/PlaylistSearch";
import { Link } from "@reach/router";
import _ from "lodash";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 0,
    height: 300,
  },
  media: {
    height: 300,
    width: 300,
  },
  tileBar: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
}));

interface Props {
  playlist: PlaylistSearch_playlists;
}

const PlaylistSearchCard = ({ playlist }: Props) => {
  const classes = useStyles();

  return (
    <Link to={`/playlists/${playlist.id}`}>
      <GridListTile key="{playlist.id}" className={classes.root}>
        <img
          src={_.get(
            playlist,
            "image.url",
            "//images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80"
          )}
          className={classes.media}
        />
        <GridListTileBar className={classes.tileBar} title={playlist.name} />
      </GridListTile>
    </Link>
  );
};

export default PlaylistSearchCard;
