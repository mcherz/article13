import reducer from "reducers/article13_reducer"
import * as types from "actions/article13_actions"

import {article13InitialState} from "reducers/article13_reducer"

describe("Article13 Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(article13InitialState)
  })

  it("should set the algo accuracy string into state", () => {
    const state = {
      algorithmAccuracy: 97.5
    }
    const action = {
      type: types.SET_ALGORITHM_ACCURACY,
      payload: 90
    }
    const newState = {
      algorithmAccuracy: 90
    }
    expect(reducer(state, action)).toEqual(newState)
    expect(reducer(state, action)).not.toBe(newState)
  })
})
