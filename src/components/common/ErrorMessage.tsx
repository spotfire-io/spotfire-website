import { ApolloError } from "apollo-boost";
import { makeStyles } from "@material-ui/styles";
import { Theme, SnackbarContent } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  error: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.text.primary,
  },
}));

interface Props {
  error: ApolloError | Error | undefined;
  data?: any;
}

export const ErrorMessage = ({ error, data }: Props) => {
  const classes = useStyles();

  if (error || !data) {
    const message = error ? error.message : "No data loaded";
    return <SnackbarContent className={classes.error} message={message} />;
  } else {
    return <></>;
  }
};
