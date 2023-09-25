enum Status {
  NO = "No",
  YES = "yes",
}

export function setTranslateTicketManual(value: string): string {
  if (value === null || value === undefined) {
    return "No"
  }

  switch (value) {
    case Status.NO:
      return "No"
    case Status.YES:
      return "Sí"
    default:
      return value
  }
}
