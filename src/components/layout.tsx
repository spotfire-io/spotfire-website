/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./layout.css";
import auth from "../utils/auth";
import { Theme, makeStyles, Box } from "@material-ui/core";
import classNames from "classnames";
import { access } from "fs";
import { TopMenu } from "./common/TopMenu";
import { redirectTo } from "@reach/router";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    textAlign: "center",
  },
  gqlPlaygroundLink: {
    color: "white",
    textDecoration: "inherit",
    "&:hover": {
      textDecoration: "white",
    },
  },
  noMenuBox: {
    height: theme.spacing(10),
  },
}));

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const classes = useStyles();

  const accessToken = auth.getAccessToken();

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <div>
              {auth.isAuthenticated() ? (
                <TopMenu />
              ) : (
                <Box className={classes.noMenuBox} />
              )}
              <main>{children}</main>
            </div>
          </>
        );
      }}
    />
  );
};

export default Layout;
