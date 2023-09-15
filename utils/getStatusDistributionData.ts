import type { EventMagicTicket, Ticket } from '@/types/ticket'
import type { GetSalesData } from '@/utils/getSalesData'
import type { GetTicketsData } from '@/utils/getTicketsData'
import type { GetAdmissionsData } from '@/utils/getAdmissionsData'

import getSalesData from '@/utils/getSalesData'
import getTicketsData from '@/utils/getTicketsData'
import getAdmissionsData from '@/utils/getAdmissionsData'

type StatusDistribution = {
  status: string
  data: any
}

export default function getStatusDistributionData(tickets: Ticket[]) {
  let statusDistribution: StatusDistribution[] = []

  if (tickets.length > 0) {
    const dataSales: GetSalesData = getSalesData(tickets)
    const dataTickets: GetTicketsData = getTicketsData(tickets)
    const dataAdmissions: GetAdmissionsData = getAdmissionsData(tickets)

    statusDistribution = [
      { status: 'Ventas', data: dataSales },
      { status: 'Entradas', data: dataTickets },
      { status: 'Admisión', data: dataAdmissions },
    ]
  }

  return statusDistribution
}