const prettyNumber = (float) => {
  const int = Math.round(float)
  let numString = `${int}`
  let returnString = numString[numString.length - 1]
  for (let i = 1; i < numString.length; i++) {
    if (i % 3 === 0) {
      returnString = "," + returnString
    }
    returnString = numString[numString.length - i - 1] + returnString
  }

  return returnString
}

export default prettyNumber
