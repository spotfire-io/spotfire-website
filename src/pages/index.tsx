import React, { Suspense } from "react";
import { Router, Redirect } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import auth from "../utils/auth";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, Typography } from "@material-ui/core";
import classnames from "classnames";

import LoginView from "../components/login/LoginView";
import PlaylistSearchView from "../components/search/PlaylistSearchView";
import PlaylistDetailView from "../components/detail/PlaylistDetailView";
import { WithStyles, withStyles } from "@material-ui/styles";

const styles = {
  heroContainer: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    padding: 100,
  },
  loginButton: {
    color: "#fff",
    padding: "19px 56px",
    borderRadius: 500,
    boxShadow: "none",
    fontWeight: 800,
  },
  spotfireHeading: {
    fontWeight: 500,
  },
};

type Props = WithStyles<typeof styles>;

const IndexPage = ({ classes }: Props) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Grid
        container
        alignItems="center"
        className={classnames(classes.heroContainer)}
      >
        <Grid item xs={12} style={{ paddingBottom: 60 }}>
          <Typography
            variant="h4"
            align="center"
            className={classnames(classes.spotfireHeading)}
          >
            🔥 Spotfire
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Router>
          <Redirect
            default
            from="/"
            to={auth.isAuthenticated() ? "/playlists" : "login"}
          />
          <LoginView path="/login" />
          <PlaylistSearchView path="/playlists" />
          <PlaylistDetailView path="/playlists/:id" />
        </Router>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(IndexPage);
