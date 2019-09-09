import React from "react";
import { Typography, GridList, Theme, Grid } from "@material-ui/core";
import { useQuery } from "react-apollo";

import playlistSearchQuery from "../../queries/PlaylistSearch";
import {
  PlaylistSearch,
  PlaylistSearchVariables,
} from "../../queries/types/PlaylistSearch";
import { makeStyles } from "@material-ui/styles";
import PlaylistSearchCard from "./PlaylistSearchCard";
import LoadingDialog from "../common/LoadingDialog";
import { ErrorMessage } from "../common/ErrorMessage";

const cols = 3;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingTop: "2em",
  },
  gridList: {
    width: 300 * cols,
  },
}));

interface Props {
  query?: string;
}

const SearchPlaylistResults = ({ query }: Props) => {
  const { loading, error, data } = useQuery<
    PlaylistSearch,
    PlaylistSearchVariables
  >(playlistSearchQuery, { variables: { query } });
  const classes = useStyles();
  if (loading) {
    return <LoadingDialog message="Loading Playlist Details..." />;
  } else if (error || !data) {
    return <ErrorMessage error={error} data={data} />;
  } else if (data.playlists.length > 0) {
    return (
      <div className={classes.root}>
        <GridList cols={cols} spacing={0} className={classes.gridList}>
          {data.playlists
            // .filter(p => p.image && p.image.url)
            .map(playlist => (
              <PlaylistSearchCard playlist={playlist} />
            ))}
        </GridList>
      </div>
    );
  } else {
    return (
      <Grid item xs="auto">
        No results found
      </Grid>
    );
  }
};

export default SearchPlaylistResults;
