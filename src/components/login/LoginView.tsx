import React from "react";
import { RouteComponentProps } from "@reach/router";

import LoginButton from "./LoginButton";
import { Grid } from "@material-ui/core";

const LoginView = (props: RouteComponentProps) => (
  <>
    <LoginButton />
  </>
);

export default LoginView;
