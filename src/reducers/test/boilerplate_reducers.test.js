import reducer from "reducers/boilerplate_reducers"
import * as types from "actions/boilerplate_actions"

import {boilerplateInitialState} from "reducers/boilerplate_reducers"

describe("Boilerplate Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(boilerplateInitialState)
  })

  it("should set the boilerplate string into state", () => {
    expect(
      reducer({
        boilerplateString: ""
      }, {
        type: types.ADD_BOILERPLATE_STRING,
        payload: "string"
      })
      ).toEqual(
      {
        boilerplateString: "string"
      }
    )
  })
})
