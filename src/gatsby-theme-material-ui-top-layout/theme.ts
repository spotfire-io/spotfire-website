import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    background: {
      default: "#121212",
    },
    primary: {
      main: "#1DB954",
    },
    type: "dark",
  },
  overrides: {
    MuiFilledInput: {
      root: {
        borderBottom: 0,
        borderRadius: 4,
      },
    },
  },
});
export default theme;
