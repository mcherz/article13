export const SET_ALGORITHM_ACCURACY = "SET_ALGORITHM_ACCURACY"
export const setAlgorithmAccuracy = (accuracy) => {
  return {
    type: SET_ALGORITHM_ACCURACY,
    payload: accuracy
  }
}

export const SET_ILLEGAL_MEME_RATE = "SET_ILLEGAL_MEME_RATE"
export const setIllegalMemeRate = (rate) => {
  return {
    type: SET_ILLEGAL_MEME_RATE,
    payload: rate
  }
}
