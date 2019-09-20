import React, { Suspense } from "react";
import { Router, Redirect, Link, Location } from "@reach/router";

import auth from "../utils/auth";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid } from "@material-ui/core";

import LoginView from "../components/login/LoginView";
import PlaylistSearchView from "../components/search/PlaylistSearchView";
import PlaylistDetailView from "../components/detail/PlaylistDetailView";
import OptimizationJobView from "../components/job/OptimizationJobView";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { LoadTracksStep } from "../components/detail/LoadTracksStep";

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

const IndexPage = () => {
  const defaultRedirect = auth.isAuthenticated() ? "/playlists" : "/login";

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <FadeTransitionRouter>
            <Redirect
              from="/"
              to={auth.isAuthenticated() ? "/playlists" : "/login"}
              replace={true}
              noThrow
            />
            <LoginView path="/login" />
            <PlaylistSearchView path="/playlists" />
            <PlaylistDetailView path="/playlists/:id" />
            <LoadTracksStep path="/playlists/:playlistId/load" />
            <OptimizationJobView path="/jobs/:id" />
          </FadeTransitionRouter>

          {/* <Router location>
            <Redirect
              from="/"
              to={auth.isAuthenticated() ? "/playlists" : "/login"}
              replace={true}
            />
            <LoginView path="/login" />
            <PlaylistSearchView path="/playlists" />
            <PlaylistDetailView path="/playlists/:id" />
          </Router> */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
