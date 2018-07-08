import { connect } from "react-redux"

import Article13 from "components/article13"

import { setAlgorithmAccuracy } from "actions/article13_actions"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    algorithmAccuracy: state.article13.algorithmAccuracy
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    setAlgorithmAccuracy(accuracy){
      dispatch(setAlgorithmAccuracy(accuracy))
    }
  }
}

const Article13Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article13)

export default Article13Container
