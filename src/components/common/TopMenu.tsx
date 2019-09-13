import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import auth from "../../utils/auth";
import { Icon, Menu, MenuItem } from "@material-ui/core";
import { Link as ReachLink } from "@reach/router";
import { Link as ReactLink } from "@material-ui/core";
import ExecutionEnvironment from "exenv";

import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    emoji: {
      marginRight: theme.spacing(2),
      borderRadius: 0,
      overflow: "auto",
      height: "auto",
    },
    title: {
      flexGrow: 1,
      color: theme.palette.text.primary,
    },
    userName: {
      color: theme.palette.text.primary,
    },
    menuButton: {
      marginLeft: theme.spacing(1),
      borderRadius: 0,
      background: "none",
    },
    menuIcon: {
      color: theme.palette.text.primary,
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      background: "none",
      border: "none",
    },
  })
);

interface Props {}

const gqlEndpoint = process.env["GATSBY_GRAPHQL_API_ENDPOINT"];

export const TopMenu = (props: Props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const accessToken = auth.getAccessToken();

  const playgroundHeaders = JSON.stringify({
    Authorization: `Bearer ${accessToken}`,
  });
  const gqlPlaygroundHref = `${gqlEndpoint}?headers=${playgroundHeaders}`;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar>
          <Icon className={classes.emoji}>🔥</Icon>
          <Typography variant="h6" className={classes.title}>
            <a style={{ textDecoration: "none", color: "white" }} href="/">
              Spotfire
            </a>
          </Typography>

          <Typography className={classes.userName}>
            {auth.getUserName()}
          </Typography>
          <IconButton
            className={classes.menuButton}
            aria-controls="main-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <ExpandMoreIcon className={classes.menuIcon} />
          </IconButton>
          <Menu
            id="main-menu"
            // anchorEl={anchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            // anchorPosition={{ top: 300, left: 0 }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <ReachLink to="/playlists" className={classes.link}>
              <MenuItem>Search Playlists</MenuItem>
            </ReachLink>
            <ReactLink
              href={gqlPlaygroundHref}
              className={classes.link}
              target="_playground"
            >
              <MenuItem>GraphQL Playground</MenuItem>
            </ReactLink>
            {ExecutionEnvironment.canUseDOM && (
              <CopyToClipboard text={accessToken} className={classes.link}>
                <MenuItem>Copy Access Token</MenuItem>
              </CopyToClipboard>
            )}
            <MenuItem onClick={() => auth.logout()}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
