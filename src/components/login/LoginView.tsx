import React from "react";
import { RouteComponentProps } from "@reach/router";

import LoginButton from "./LoginButton";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import LoadingDialog from "../common/LoadingDialog";

const useStyles = makeStyles((theme: Theme) => ({
  heroContainer: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    padding: 100,
  },
  spotfireHeading: {
    fontWeight: 500,
  },
}));

const LoginView = (props: RouteComponentProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        xs={12}
        style={{ paddingBottom: 60, justifyContent: "center" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.spotfireHeading}
        >
          🔥 Spotfire
        </Typography>
        <Grid container justify="center">
          <LoginButton />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginView;
