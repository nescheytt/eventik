import type { Ticket } from "@/types/ticket"
import { setTranslateOrderStatus } from "@/utils/set-translate-order-status"
import { formattedTicketName } from "@/utils/set-format-values"
import { setTranslateUsedCoupon } from "@/utils/set-translate-used-coupon"
import { setTranslateTicketManual } from "@/utils/set-translate-ticket-manual"

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
  const uniqueCoupons: string[] = [
    ...new Set(data?.map((ticket: Ticket) => ticket.usedCoupon)),
  ]
  const uniqueManuals: string[] = [
    ...new Set(data?.map((ticket: Ticket) => ticket.orderAdminAddTicket)),
  ]

  const optionsStatus: Options[] = uniqueProductNames.map((name: string) => ({
    label: setTranslateOrderStatus(name),
    value: name,
  }))

  const optionsTickets: Options[] = uniqueTicketNames.map((name: string) => ({
    label: formattedTicketName(name),
    value: name,
  }))

  const optionsCoupons: Options[] = uniqueCoupons.map((name: string) => ({
    label: setTranslateUsedCoupon(name),
    value: name,
  }))

  const optionsManual: Options[] = uniqueManuals.map((name: string) => ({
    label: setTranslateTicketManual(name),
    value: name,
  }))

  return {
    optionsStatus,
    optionsTickets,
    optionsCoupons,
    optionsManual,
  }
}
