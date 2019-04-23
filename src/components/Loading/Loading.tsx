import React from "react"

import "./Loading.scss"
import loadingImg from "../../images/lava.gif"

const Loading = () => (
  <div className="sp-loading">
    <img src={loadingImg} />
  </div>
)

export default Loading
