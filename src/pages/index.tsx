import React from "react"
<<<<<<< HEAD
import { Link } from "gatsby"
import { url } from "inspector"
import {
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  FilledInput,
} from "@material-ui/core"
=======
import { Grid, Typography } from "@material-ui/core"
>>>>>>> song-table
// Local Deps
import "../styles/globalStyles.scss"

import Layout from "../components/layout"
<<<<<<< HEAD
import Image from "../components/image"
=======
>>>>>>> song-table
import SEO from "../components/seo"
import LoginButtonWrapper from "../components/LoginButtonWrapper"
import PlaylistSearch from "../components/PlaylistSearch"
import Loading from "../components/Loading/Loading"
import PlaylistGrid from "../components/PlaylistGrid/PlaylistGrid"

const styles = {
  heroContainer: {
    // backgroundImage: `url(${require("../images/matt-collamer-565848-unsplash.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    // height: 768,
    padding: 100,
  },
  loginButton: {
    borderRadius: 500,
    boxShadow: "none",
    color: "#fff",
    fontWeight: 800,
    padding: "19px 56px",
  },
  spotfireHeading: {
    color: "#fff",
    fontWeight: 500,
  },
}

const initialState = {
  isLoading: false,
}

type State = Readonly<typeof initialState>

export default class IndexPage extends React.Component<{}, State> {
  state: State = initialState

  render() {
    const { isLoading } = this.state
    return (
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
          <Grid
            container
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <LoginButtonWrapper>
              <Grid item xs={6}>
                <PlaylistSearch />
              </Grid>
              {isLoading && <Loading />}
              {!isLoading && (
                <Grid item xs={12}>
                  <PlaylistGrid />
                </Grid>
              )}
            </LoginButtonWrapper>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}
