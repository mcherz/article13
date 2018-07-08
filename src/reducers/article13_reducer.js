import dotProp from "dot-prop-immutable"

// import actions
import * as article13Actions from "actions/article13_actions"

// define initial state of model
export const article13InitialState = {
  algorithmAccuracy: 97.5,
  illegalRate: .0001,
}

function article13(state = article13InitialState, action){
  switch(action.type){
    case article13Actions.SET_ALGORITHM_ACCURACY:
      return dotProp.set(state, "algorithmAccuracy", action.payload)
    case article13Actions.SET_ILLEGAL_MEME_RATE:
      return dotProp.set(state, "illegalRate", action.payload)
    default:
      return state
  }

}

export default article13
