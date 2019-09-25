import React from "react";
import { Typography, GridList, Theme, Grid } from "@material-ui/core";
import { usePlaylistSearchQuery } from "../../graphql";
import { makeStyles } from "@material-ui/styles";
import PlaylistSearchCard from "./PlaylistSearchCard";
import { QueryGuard } from "../common/QueryGuard";
import { client } from "../../utils/apolloClient";

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
    width: "100%",
    justifyContent: "center",
  },
}));

interface Props {
  query?: string;
}

const SearchPlaylistResults = ({ query }: Props) => {
  const classes = useStyles();
  const result = usePlaylistSearchQuery({
    variables: { query, limit: 48 },
    client,
  });
  const { data } = result;

  return (
    <QueryGuard result={result}>
      {data && data.playlists.length > 0 ? (
        <div className={classes.root}>
          <GridList cols={cols} spacing={0} className={classes.gridList}>
            {data!.playlists.map(playlist => (
              <PlaylistSearchCard playlist={playlist} key={playlist.id} />
            ))}
          </GridList>
        </div>
      ) : (
        <Grid item xs="auto">
          No results found
        </Grid>
      )}
      )
    </QueryGuard>
  );
};

export default SearchPlaylistResults;
