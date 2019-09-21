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
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "linear-gradient(to right, #151515 0%, #050505 100%);",
        },
      },
    },
  },
});
export default theme;
