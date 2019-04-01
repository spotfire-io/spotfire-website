import React, { ReactNode } from "react"
import { Button, Paper, Grid, Typography } from "@material-ui/core"
import auth from "../utils/auth"

const styles = {
  loginButton: {
    color: "#fff",
    padding: "19px 56px",
    borderRadius: 500,
    boxShadow: "none",
    fontWeight: 800,
  },
}

const initialState = {
  authenticated: false,
}

type State = Readonly<typeof initialState>

interface Props {
  children: ReactNode
}

export default class LoginButtonWrapper extends React.Component<Props, State> {
  state: State = initialState

  login() {
    auth.login()

    this.setState({
      authenticated: auth.isAuthenticated(),
    })
  }

  logout() {
    auth.logout()

    this.setState({
      authenticated: auth.isAuthenticated(),
    })
  }

  componentDidMount() {
    this.setState({
      authenticated: auth.isAuthenticated(),
    })
    console.log()
  }

  render() {
    return (
      <>
        {!this.state.authenticated && (
          <Button
            variant="contained"
            color="primary"
            style={styles.loginButton}
            onClick={this.login.bind(this)}
          >
            Login to Spotify
          </Button>
        )}
        {this.state.authenticated && <>{this.props.children}</>}
      </>
    )
  }
}
