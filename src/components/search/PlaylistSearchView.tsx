import React, { useState, Suspense } from "react";
import { RouteComponentProps } from "@reach/router";
import { FilledInput, Grid, Theme } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import PlaylistSearchResults from "./PlaylistSearchResults";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    padding: "20px 20px 17px",
  },
  playlistSummary: {
    marginTop: "2em",
  },
  root: {
    borderRadius: 4,
  },
}));

const PlaylistSearchView = (props: RouteComponentProps) => {
  const classes = useStyles();
  const [query, setQuery] = useState("");

  return (
    <>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <FilledInput
          fullWidth
          disableUnderline
          placeholder="Search for a Playlist or Enter a URL"
          onChange={e => setQuery(e.target.value)}
          classes={{
            root: classes.root,
            input: classes.input,
          }}
        />
      </Grid>
      <PlaylistSearchResults query={query} />
    </>
  );
};

export default PlaylistSearchView;
