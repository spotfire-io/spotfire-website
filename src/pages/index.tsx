import React, { Suspense } from "react";
import { Router, Redirect, Link, Location, navigate } from "@reach/router";

import auth from "../utils/auth";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid } from "@material-ui/core";

import LoginView from "../components/login/LoginView";
import PlaylistSearchView from "../components/search/PlaylistSearchView";
import OptimizationJobView from "../components/job/OptimizationJobView";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { LoadPlaylistTracksView } from "../components/load/LoadPlaylistTracksView";
import LoadingDialog from "../components/common/LoadingDialog";

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => {
      if (
        location.pathname != "/login" &&
        (!auth.isAuthenticated() || auth.getExpiresAt() < new Date().getTime())
      ) {
        navigate("/login");
        return <LoadingDialog message="Redirecting to Login..." />;
      }
      return (
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
      );
    }}
  </Location>
);

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <FadeTransitionRouter>
            <LoginView path="/login" />
            <PlaylistSearchView path="/playlists" />
            <LoadPlaylistTracksView
              path="/playlists/:id"
              id="default"
              autoAdvance={true}
            />
            <OptimizationJobView path="/jobs/:id" id="default" />
          </FadeTransitionRouter>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
