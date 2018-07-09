import { connect } from "react-redux"

import Article13 from "components/article13"

import { setAlgorithmAccuracy, setIllegalMemeRate } from "actions/article13_actions"

import { accuracy, rate, truePositive, trueNegative, falsePositive, falseNegative } from "selectors/article13"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    algorithmAccuracy: state.article13.algorithmAccuracy,
    illegalRate: state.article13.illegalRate,
    accuracy: accuracy(state),
    rate: rate(state),
    truePositive: truePositive(state),
    trueNegative: trueNegative(state),
    falsePositive: falsePositive(state),
    falseNegative: falseNegative(state),
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    setAlgorithmAccuracy(accuracy){
      dispatch(setAlgorithmAccuracy(accuracy))
    },
    setIllegalMemeRate(rate){
      dispatch(setIllegalMemeRate(rate))
    },
  }
}

const Article13Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article13)

export default Article13Container
