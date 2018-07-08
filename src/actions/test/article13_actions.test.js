import * as actions from "actions/article13_actions"

describe("Article13 Actions", () => {

  it("should create an action to set the algo accuracy.", () => {
    const accuracy = 90
    const expectedAction = {
      type: actions.SET_ALGORITHM_ACCURACY,
      payload: accuracy
    }
    expect(actions.setAlgorithmAccuracy(90)).toEqual(expectedAction)
  })

  it("should create an action to set the illegal rate.", () => {
    const rate = .001
    const expectedAction = {
      type: actions.SET_ILLEGAL_MEME_RATE,
      payload: rate
    }
    expect(actions.setIllegalMemeRate(.001)).toEqual(expectedAction)
  })
})
