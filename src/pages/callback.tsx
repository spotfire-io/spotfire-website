import React from "react";
import auth from "../utils/auth";
import LoadingDialog from "../components/common/LoadingDialog";

class Callback extends React.Component {
  render() {
    auth.handleAuthentication();
    return (
      <div>
        <LoadingDialog message="Processing credentials..." />
      </div>
    );
  }
}

export default Callback;
