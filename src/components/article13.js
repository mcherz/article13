import React from "react"

import constants from "helpers/constants"
import prettyNumber from "helpers/pretty_number"

class Article13 extends React.Component {
  componentDidMount = () => {
    this.props.setAlgorithmAccuracy(97.5)
  }

  handleAccuracyChange = () => {
    this.props.setAlgorithmAccuracy(100 * Math.log(this.accuracySlider.valueAsNumber) / Math.log(100))
  }

  convertAccuracyToValue = (accuracy) => Math.exp(Math.log(100) * accuracy / 100)

  handleIncidenceChange = (event) => {
    this.props.setIllegalMemeRate(10 ** Math.sqrt(25 - this.incidenceSlider.valueAsNumber))
  }

  convertIncidenceToValue = (incidence) => 25 - Math.log10(incidence) ** 2

  render = () => {
    return <div className="boilerplate">
      <div>
        <input ref={input => this.accuracySlider = input} type="range" min="1" max="100" step="any" value={this.convertAccuracyToValue(this.props.algorithmAccuracy)} onChange={this.handleAccuracyChange} />
        <span>Accuracy: {this.props.algorithmAccuracy.toFixed(2)}</span>
      </div>
      <div>
        <input ref={input => this.incidenceSlider = input} type="range" min="0" max="24" step="any" value={this.convertIncidenceToValue(this.props.illegalRate)} onChange={this.handleIncidenceChange} />
        <span>Incidence: 1/{prettyNumber(this.props.illegalRate)}</span>
      </div>
      <div>
        <div>True Positives: {prettyNumber(10000000 * (1 - 1/this.props.illegalRate) * this.props.algorithmAccuracy/100)}</div>
        <div>True Negatives: {prettyNumber(10000000 * (1/this.props.illegalRate) * this.props.algorithmAccuracy/100)}</div>
        <div>False Positives: {prettyNumber(10000000 * (1 - 1/this.props.illegalRate) * (1 - this.props.algorithmAccuracy/100))}</div>
        <div>False Negatives: {prettyNumber(10000000 * (1/this.props.illegalRate) * (1 - this.props.algorithmAccuracy/100))}</div>
      </div>
    </div>
  }
}

export default Article13
