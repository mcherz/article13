import dotProp from "dot-prop-immutable"

// import actions
import * as boilerplateActions from "actions/boilerplate_actions"

// define initial state of model
export const boilerplateInitialState = {
  boilerplateString: ""
}

function boilerplate(state = boilerplateInitialState, action){
  switch(action.type){
    case boilerplateActions.ADD_BOILERPLATE_STRING:
      return dotProp.set(state, "boilerplateString", action.payload)
    default:
      return state
  }

}

export default boilerplate
