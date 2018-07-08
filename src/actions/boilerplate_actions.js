export const ADD_BOILERPLATE_STRING = "ADD_BOILERPLATE_STRING"
export const addBoilerplateString = (plate) => {
  return {
    type: ADD_BOILERPLATE_STRING,
    payload: plate
  }
}