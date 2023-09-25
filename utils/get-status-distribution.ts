import type { Ticket, TicketSales } from "@/types/ticket"
import type { GetSalesData } from "@/utils/get-data-sales"
import type { GetTicketsData } from "@/utils/get-data-tickets"
import type { GetAdmissionsData } from "@/utils/get-data-admissions"

import { getDataSales } from "@/utils/get-data-sales"
import { getDataTickets } from "@/utils/get-data-tickets"
import { getDataAdmissions } from "@/utils/get-data-admissions"

type StatusDistribution = {
  status: string
  data: any
}

export function getStatusDistribution(
  tickets: Ticket[],
  ticketSales: TicketSales[]
) {
  let statusDistribution: StatusDistribution[] = []

  if (tickets.length > 0) {
    const dataSales: GetSalesData = getDataSales(ticketSales)
    const dataTickets: GetTicketsData = getDataTickets(tickets)
    const dataAdmissions: GetAdmissionsData = getDataAdmissions(tickets)

    statusDistribution = [
      { status: "Ventas", data: dataSales },
      { status: "Entradas", data: dataTickets },
      { status: "Admisión", data: dataAdmissions },
    ]
  }

  return statusDistribution
}
