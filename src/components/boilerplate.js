import React from "react"

import constants from "helpers/constants"

class Boilerplate extends React.Component {
  componentDidMount = () => {
    this.props.addBoilerplateString("Hello, Article13")
  }

  render = () => {
    return <div className="boilerplate">{this.props.boilerplateString}</div>
  }
}

export default Boilerplate
