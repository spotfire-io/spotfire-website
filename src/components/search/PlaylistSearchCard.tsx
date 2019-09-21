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
    // height: 300,
    width: 300,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(7),
  },
  link: {
    textDecoration: "none",
  },
  playlistName: {
    fontSize: 18,
    fontWeight: 800,
    color: theme.palette.text.primary,
    maxWidth: 300,
    textAlign: "center",
    marginBottom: theme.spacing(2),
    // textDecoration: "none",
  },
  subtitle: {
    color: theme.palette.grey[300],
    textAlign: "center",
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: theme.spacing(1),
    boxShadow: "0 0 10px rgba(0,0,0,.3)",
  },
}));

interface Props {
  playlist: PlaylistSearch_playlists;
}

const PlaylistSearchCard = ({ playlist }: Props) => {
  const classes = useStyles();

  return (
    <Link to={`/playlists/${playlist.id}`} className={classes.link}>
      <GridListTile key="{playlist.id}" className={classes.root}>
        <Typography className={classes.playlistName} noWrap={true}>
          {playlist.name}
        </Typography>
        <img
          src={_.get(
            playlist,
            "image.url",
            "//images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80"
          )}
          className={classes.image}
        />
        <Typography variant="subtitle2" className={classes.subtitle}>
          Created by <strong>{playlist.owner.display_name}</strong>.
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          <strong>{playlist.latest_snapshot!.track_count}</strong> tracks{" "}
          {playlist.latest_snapshot!.status.toLowerCase().replace("_", " ")}.
        </Typography>
      </GridListTile>
    </Link>
  );
};

export default PlaylistSearchCard;
