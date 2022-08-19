const monthCoefficient = 1 / 100 / 12

export const mortageCalculation = (period: number, percentage: number, amount: number) => {
  if (period > 0 && percentage > 0 && amount > 0) {
    return Math.round(
      (amount *
        percentage *
        monthCoefficient *
        (1 + percentage * monthCoefficient) ** (12 * period)) /
        ((1 + percentage * monthCoefficient) ** (12 * period) - 1)
    )
  }
}
