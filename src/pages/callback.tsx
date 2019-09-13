import React from "react";
import auth from "../utils/auth";
import LoadingDialog from "../components/common/LoadingDialog";
import { Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(12),
  },
}));

export const Callback = () => {
  const classes = useStyles();
  auth.handleAuthentication();
  return (
    <Grid container xs={12} className={classes.container}>
      <LoadingDialog message="Processing credentials..." />
    </Grid>
  );
};

export default Callback;
