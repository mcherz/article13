import React from "react"

import constants from "helpers/constants"

class Article13 extends React.Component {
  componentDidMount = () => {
    this.props.setAlgorithmAccuracy(97.5)
  }

  render = () => {
    return <div className="boilerplate">{this.props.algorithmAccuracy}</div>
  }
}

export default Article13
