import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  FilledInput,
} from "@material-ui/core"
import { url } from "inspector"

import LoginButtonWrapper from "../components/LoginButtonWrapper"
import PlaylistSearch from "../components/PlaylistSearch"

const styles = {
  heroContainer: {
    // backgroundImage: `url(${require("../images/matt-collamer-565848-unsplash.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    // height: 768,
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
    // color: "#333"
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid container alignItems="center" style={styles.heroContainer}>
      <Grid item xs={12} style={{ paddingBottom: 60 }}>
        <Typography
          variant="display4"
          align="center"
          style={styles.spotfireHeading}
        >
          🔥 Spotfire
        </Typography>
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <LoginButtonWrapper>
          <PlaylistSearch />
        </LoginButtonWrapper>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
