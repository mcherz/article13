import { connect } from "react-redux"

import Article13 from "components/article13"

import { setAlgorithmAccuracy, setIllegalMemeRate } from "actions/article13_actions"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    algorithmAccuracy: state.article13.algorithmAccuracy,
    illegalRate: state.article13.illegalRate,
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
