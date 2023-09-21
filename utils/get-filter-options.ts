import type { Ticket } from "@/types/ticket"
import { setTranslateOrderStatus } from "@/utils/set-translate-order-status"
import { formattedTicketName } from "@/utils/set-format-values"

interface GetFilterOptionsProps {
  data: any[]
}

type Options = {
  label: string
  value: string
}

export function getFilterOptions({ data }: GetFilterOptionsProps) {
  const uniqueProductNames: string[] = [
    ...new Set(data?.map((ticket: Ticket) => ticket.orderStatus)),
  ]
  const uniqueTicketNames: string[] = [
    ...new Set(data?.map((ticket: Ticket) => ticket.ticketName)),
  ]

  const optionsStatus: Options[] = uniqueProductNames.map((name: string) => ({
    label: setTranslateOrderStatus(name),
    value: name,
  }))

  const optionsTickets: Options[] = uniqueTicketNames.map((name: string) => ({
    label: formattedTicketName(name),
    value: name,
  }))

  return {
    optionsStatus,
    optionsTickets,
  }
}
