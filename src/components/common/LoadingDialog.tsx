import ReactLoading from "react-loading";
import React from "react";
import { Box, Typography, Theme, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    width: "100%",
    justifyContent: "center",
  },
  centered: {
    margin: "auto",
  },
}));

interface Props {
  message?: String;
}

const LoadingDialog = ({ message = "Loading..." }: Props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.box}>
      <Grid item xs={12}>
        <ReactLoading
          type="spin"
          color="#fff"
          width={150}
          className={classes.centered}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">{message}</Typography>
      </Grid>
    </Grid>
  );
};

export default LoadingDialog;
