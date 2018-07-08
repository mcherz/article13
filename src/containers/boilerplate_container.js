import { connect } from "react-redux"

import Boilerplate from "components/boilerplate"

import { addBoilerplateString } from "actions/boilerplate_actions"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    boilerplateString: state.boilerplate.boilerplateString
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    addBoilerplateString(plate){
      dispatch(addBoilerplateString(plate))
    }
  }
}

const BoilerplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Boilerplate)

export default BoilerplateContainer
