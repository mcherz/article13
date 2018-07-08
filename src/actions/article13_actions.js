export const SET_ALGORITHM_ACCURACY = "SET_ALGORITHM_ACCURACY"
export const setAlgorithmAccuracy = (accuracy) => {
  return {
    type: SET_ALGORITHM_ACCURACY,
    payload: accuracy
  }
}
