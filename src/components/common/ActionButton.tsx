import React, { FunctionComponent, PropsWithChildren } from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: "#fff",
    padding: "19px 56px",
    borderRadius: 500,
    boxShadow: "none",
    fontWeight: 800,
    marginTop: theme.spacing(6),
  },
}));

interface Props {
  onClick: (e: any) => void;
  children: ReactNode;
}

export const ActionButton = ({ onClick, children }: Props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      color="primary"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
