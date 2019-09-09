import ReactLoading from "react-loading";
import React from "react";
import { Box, Typography } from "@material-ui/core";

interface Props {
  message?: String;
}

const LoadingDialog = ({ message = "Loading..." }: Props) => {
  return (
    <Box display="flex">
      <ReactLoading type="cubes" color="#fff" />
      <Typography>{message}</Typography>
    </Box>
  );
};

export default LoadingDialog;
