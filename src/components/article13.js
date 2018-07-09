import React from "react"

import constants from "helpers/constants"
import prettyNumber from "helpers/pretty_number"

class Article13 extends React.Component {
  componentDidMount = () => {
    this.forceUpdate()
  }

  getStyles = (_value) => {
    const value = _value / 100
    const pixelWidth = this.bars ? this.bars.getBoundingClientRect().width / 4 - 10 : 100

    const width = Math.sqrt(value) > pixelWidth ? pixelWidth : Math.sqrt(value)
    const height = width ? value / width : 0
    return { width, height }
  }

  render = () => {
    return <div className="article13">
      <div>
        <input className="slider" ref={input => this.accuracySlider = input} type="range" min="1" max="100" step="any" value={this.props.accuracy} onChange={() => this.props.setAlgorithmAccuracy(this.accuracySlider.valueAsNumber)} />
        <span>Accuracy: {this.props.algorithmAccuracy.toFixed(2)}</span>
      </div>
      <div>
        <input className="slider" ref={input => this.incidenceSlider = input} type="range" min="0" max="24" step="any" value={this.props.rate} onChange={() => this.props.setIllegalMemeRate(this.incidenceSlider.valueAsNumber)} />
        <span>Incidence: 1/{prettyNumber(this.props.illegalRate)}</span>
      </div>
      <div ref={div => this.bars = div} className="bar-container">
        <div className="bar">
          <div className="bar-label">True Negatives: {prettyNumber(this.props.trueNegative)}</div>
          <div className="area-green" style={this.getStyles(this.props.trueNegative)}></div>
        </div>
        <div className="bar">
          <div className="bar-label">True Positives: {prettyNumber(this.props.truePositive)}</div>
          <div className="area-blue" style={this.getStyles(this.props.truePositive)}></div>
        </div>
        <div className="bar">
          <div className="bar-label">False Negatives: {prettyNumber(this.props.falseNegative)}</div>
          <div className="area-grey" style={this.getStyles(this.props.falseNegative)}></div>
        </div>
        <div className="bar">
          <div className="bar-label">False Positives: {prettyNumber(this.props.falsePositive)}</div>
          <div className="area-red" style={this.getStyles(this.props.falsePositive)}></div>
        </div>
      </div>
    </div>
  }
}

export default Article13
