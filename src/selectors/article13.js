import { createSelector } from "reselect"

const article13 = (state) => state.article13 || {}

const algorithmAccuracy = createSelector(
  [article13], article13 => article13.algorithmAccuracy
)

export const accuracy = createSelector(
  [algorithmAccuracy], algorithmAccuracy =>
    Math.exp(Math.log(100) * algorithmAccuracy / 100)
)

const illegalRate = createSelector(
  [article13], article13 => article13.illegalRate
)

export const rate = createSelector(
  [illegalRate], illegalRate =>
    25 - Math.log10(illegalRate) ** 2
)

export const truePositive = createSelector(
  [algorithmAccuracy, illegalRate],
  (algorithmAccuracy, illegalRate) =>
    10000000 * (1 - 1/illegalRate) * algorithmAccuracy/100
)

export const trueNegative = createSelector(
  [algorithmAccuracy, illegalRate],
  (algorithmAccuracy, illegalRate) =>
  10000000 * (1/illegalRate) * algorithmAccuracy/100
)

export const falsePositive = createSelector(
  [algorithmAccuracy, illegalRate],
  (algorithmAccuracy, illegalRate) =>
  10000000 * (1 - 1/illegalRate) * (1 - algorithmAccuracy/100)
)

export const falseNegative = createSelector(
  [algorithmAccuracy, illegalRate],
  (algorithmAccuracy, illegalRate) =>
  10000000 * (1/illegalRate) * (1 - algorithmAccuracy/100)
)
