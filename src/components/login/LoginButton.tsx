import React, { ReactNode, useState } from "react";
import { Button, createStyles, WithStyles } from "@material-ui/core";
import auth from "../../utils/auth";
import { withStyles } from "@material-ui/styles";
import classnames from "classnames";

const styles = createStyles({
  loginButton: {
    color: "#fff",
    padding: "19px 56px",
    borderRadius: 500,
    boxShadow: "none",
    fontWeight: 800,
  },
});

type Props = WithStyles<typeof styles>;

const LoginButton = ({ classes }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Button
      variant="contained"
      color="primary"
      className={classnames(classes.loginButton)}
      onClick={() => {
        auth.login();
        setAuthenticated(auth.isAuthenticated());
      }}
    >
      Login to Spotify
    </Button>
  );
};

export default withStyles(styles)(LoginButton);
