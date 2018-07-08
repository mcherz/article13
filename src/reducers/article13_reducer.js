import dotProp from "dot-prop-immutable"

// import actions
import * as article13Actions from "actions/article13_actions"

// define initial state of model
export const article13InitialState = {
  algorithmAccuracy: 97.5
}

function article13(state = article13InitialState, action){
  switch(action.type){
    case article13Actions.SET_ALGORITHM_ACCURACY:
      return dotProp.set(state, "algorithmAccuracy", action.payload)
    default:
      return state
  }

}

export default article13
