import { QueryID } from "@/types/query-id"

export function setTranslateQueryId(id: string): string | undefined {
  if (typeof id !== "string") {
    throw new Error("El valor debe ser un string")
  }

  switch (id) {
    case QueryID.ORDER_ID:
      return "Pedido"
    case QueryID.ORDER_STATUS:
      return "Estado"
    case QueryID.TICKET_ID:
      return "Entrada"
    case QueryID.TICKET_NAME:
      return "Tipo de entrada"
    case QueryID.TICKET_NUMBER:
      return "Número de entrada"
    case QueryID.TICKET_PRICE:
      return "Precio de entrada"
    case QueryID.TICKET_POST_DATE:
      return "Fecha"
    case QueryID.TICKET_STATUS:
      return "¿Admitido?"
    case QueryID.ORDER_ADMIN_ADD_TICKET:
      return "Origen"
    case QueryID.USED_COUPON:
      return "Cupón"
    case QueryID.ATTENDEE:
      return "Asistente"
    case QueryID.ATTENDEE_FIRST_NAME:
      return "Nombre asistente"
    case QueryID.ATTENDEE_LAST_NAME:
      return "Apellido asistente"
    case QueryID.ATTENDEE_EMAIL:
      return "Email asistente"
    case QueryID.ATTENDEE_PHONE:
      return "Teléfono asistente"
    case QueryID.PURCHASER:
      return "Pagador"
    case QueryID.PURCHASER_FIRST_NAME:
      return "Nombre pagador"
    case QueryID.PURCHASER_LAST_NAME:
      return "Apellido pagador"
    case QueryID.PURCHASER_EMAIL:
      return "Email pagador"
    case QueryID.PURCHASER_PHONE:
      return "Teléfono pagador"
    default:
      return undefined
  }
}
