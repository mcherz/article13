import reducer from "reducers/article13_reducer"
import * as types from "actions/article13_actions"

import {article13InitialState} from "reducers/article13_reducer"

describe("Article13 Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(article13InitialState)
  })

  it("should set the algo accuracy into state", () => {
    const state = {
      algorithmAccuracy: 97.5
    }
    const action = {
      type: types.SET_ALGORITHM_ACCURACY,
      payload: 90
    }
    const newState = {
      algorithmAccuracy: 97.71212547196623
    }
    expect(reducer(state, action)).toEqual(newState)
    expect(reducer(state, action)).not.toBe(newState)
  })

  it("should set the illegal meme rate into state", () => {
    const state = {
      illegalRate: 200
    }
    const action = {
      type: types.SET_ILLEGAL_MEME_RATE,
      payload: 20
    }
    const newState = {
      illegalRate: 172.21381097981777
    }
    expect(reducer(state, action)).toEqual(newState)
    expect(reducer(state, action)).not.toBe(newState)
  })
})
