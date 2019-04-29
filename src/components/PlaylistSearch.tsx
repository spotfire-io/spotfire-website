import React, { ReactNode } from "react"
import {
  Button,
  Paper,
  Grid,
  TextField,
  FilledInput,
  createStyles,
} from "@material-ui/core"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import withStyles, {
  StyledComponentProps,
  StyleRulesCallback,
} from "@material-ui/core/styles/withStyles"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import PlaylistSummary from "./PlaylistSummary"

type Props = {
  classes: any
  theme: any
}

type State = {
  value: string
}

const styles = createStyles({
  input: {
    padding: "20px 20px 17px",
  },
  playlistSummary: {
    marginTop: "2em",
  },
  root: {
    borderRadius: 4,
  },
})

const GET_PLAYLIST_BY_URI = gql`
  query PlaylistByUrl($uri: String) {
    playlist(uri: $uri) {
      name
    }
  }
`

class PlaylistSearch extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const { classes, theme } = this.props

    return (
      <>
        <FilledInput
          fullWidth
          disableUnderline
          placeholder="Paste a Spotify Playlist URL"
          onChange={this.handleChange}
          classes={{
            root: classes.root,
            input: classes.input,
          }}
        />
        {this.state.value && <PlaylistSummary uri={this.state.value} />}
      </>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PlaylistSearch)
