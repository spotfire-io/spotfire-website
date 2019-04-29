/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import auth from "../utils/auth"
import { createStyles, withStyles, Typography, Link } from "@material-ui/core"
import classNames from "classnames"

const styles = createStyles({
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
})

const Layout = ({ children, classes }) => (
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
      const gqlPlaygroundHref = `${
        process.env["GATSBY_GRAPHQL_API_ENDPOINT"]
      }?headers=${JSON.stringify({
        Authorization: `Bearer ${auth.getAccessToken()}`,
      })}`

      return (
        <>
          <div>
            <main>{children}</main>
            <footer className={classNames(classes.footer)}>
              {auth.isAuthenticated() && (
                <Link href={gqlPlaygroundHref} variant="body1" target="_blank">
                  Go to GraphQL Playground
                </Link>
              )}
            </footer>
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(Layout)
