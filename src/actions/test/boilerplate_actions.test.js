import * as actions from "actions/boilerplate_actions"

describe("Boilerplate Actions", () => {

  it("should create an action to set the current boilerplate.", () => {
    const plate = "boilers"
    const expectedAction = {
      type: actions.ADD_BOILERPLATE_STRING,
      payload: plate
    }
    expect(actions.addBoilerplateString("boilers")).toEqual(expectedAction)
  })
})
