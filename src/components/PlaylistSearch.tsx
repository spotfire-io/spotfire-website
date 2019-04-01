import React, { ReactNode } from "react"
import { Button, Paper, Grid, TextField, FilledInput } from "@material-ui/core"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import withStyles, {
  StyledComponentProps,
  StyleRulesCallback,
} from "@material-ui/core/styles/withStyles"

type Props = {
  classes: any
  theme: any
}

type State = {
  searchString: string
}

class PlaylistSearch extends React.Component<Props, State> {
  render() {
    const { classes, theme } = this.props
    return (
      <FilledInput
        fullWidth
        disableUnderline
        placeholder="Paste a Spotify Playlist URL"
        classes={{
          root: classes.root,
          input: classes.input,
        }}
      />
    )
  }
}

export default withStyles(
  (theme: Theme) => ({
    input: {
      padding: "20px 20px 17px",
    },
    root: {
      borderRadius: 4,
    },
  }),
  {
    withTheme: true,
  }
)(PlaylistSearch)
