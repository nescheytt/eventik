enum Status {
  WC_COMPLETED = "wc-completed",
  WC_REFUNDED = "wc-refunded",
}

export function setTranslateOrderStatus(value: string): string {
  if (value === null || value === undefined) {
    return ""
  }

  switch (value) {
    case Status.WC_COMPLETED:
      return "Completa"
    case Status.WC_REFUNDED:
      return "Devuelta"
    default:
      return value
  }
}
