import ReactLoading from "react-loading";
import React from "react";
import { Box, Typography, Theme, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },
  loading: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
}));

interface Props {
  message?: String;
}

export const LoadingDialog = ({ message = "Loading..." }: Props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.box}>
      <Grid item xs={12}>
        <ReactLoading
          type="spin"
          color="#fff"
          width={150}
          height={150}
          className={classes.loading}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">{message}</Typography>
      </Grid>
    </Grid>
  );
};

export default LoadingDialog;
