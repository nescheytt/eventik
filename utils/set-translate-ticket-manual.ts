enum Status {
  NO = "No",
  YES = "yes",
}

export function setTranslateTicketManual(value: string): string {
  if (value === null || value === undefined) {
    return "Online"
  }

  switch (value) {
    case Status.NO:
      return "Online"
    case Status.YES:
      return "Manual"
    default:
      return value
  }
}
