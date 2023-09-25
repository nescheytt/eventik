enum Status {
  NO = "No",
  YES = "Yes",
}

export function setTranslateUsedCoupon(value: string): string {
  if (value === null || value === undefined) {
    return "No"
  }

  switch (value) {
    case Status.NO:
      return "No"
    case Status.YES:
      return "Si"
    default:
      return value
  }
}
