import { Button } from "@material-ui/core"
import React, { ReactNode } from "react"
import auth from "../utils/auth"

const styles = {
  loginButton: {
    borderRadius: 500,
    boxShadow: "none",
    color: "#fff",
    fontWeight: 800,
    padding: "19px 56px",
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

  login = () => {
    auth.login()

    this.setState({
      authenticated: auth.isAuthenticated(),
    })
  }

  logout = () => {
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
            onClick={this.login}
          >
            Login to Spotify
          </Button>
        )}
        {this.state.authenticated && <>{this.props.children}</>}
      </>
    )
  }
}
