import React from "react"

import constants from "helpers/constants"
import prettyNumber from "helpers/pretty_number"

class Article13 extends React.Component {
  render = () => {
    return <div className="boilerplate">
      <div>
        <input ref={input => this.accuracySlider = input} type="range" min="1" max="100" step="any" value={this.props.accuracy} onChange={() => this.props.setAlgorithmAccuracy(this.accuracySlider.valueAsNumber)} />
        <span>Accuracy: {this.props.algorithmAccuracy.toFixed(2)}</span>
      </div>
      <div>
        <input ref={input => this.incidenceSlider = input} type="range" min="0" max="24" step="any" value={this.props.rate} onChange={() => this.props.setIllegalMemeRate(this.incidenceSlider.valueAsNumber)} />
        <span>Incidence: 1/{prettyNumber(this.props.illegalRate)}</span>
      </div>
      <div>
        <div>True Positives: {prettyNumber(this.props.truePositive)}</div>
        <div>True Negatives: {prettyNumber(this.props.trueNegative)}</div>
        <div>False Positives: {prettyNumber(this.props.falsePositive)}</div>
        <div>False Negatives: {prettyNumber(this.props.falseNegative)}</div>
      </div>
    </div>
  }
}

export default Article13
