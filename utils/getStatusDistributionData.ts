import type { Ticket } from '@/types/ticket'
import formatCurrency from '@/utils/formatCurrency'
import formatNumber from '@/utils/formatNumber'
import getVariantNameData from '@/utils/getVariantNameData'

type Variations = {
  variation_Name: string
  ticket_Count: number
  ticket_Price: string
}

type TicketStatus = {
  status: string
  count: string
  percentage: number
  tickets: Variations[]
}

export default function getStatusDistributionData(tickets: Ticket[]) {
  let statusDistribution: TicketStatus[] = []

  if (tickets.length > 0) {
    const totalRecords = tickets.length
    const totalOrderIdSum = tickets.reduce((sum: number, { ticket_Price }: any) => sum + parseInt(ticket_Price), 0)
    const totalCheckedIn = tickets.filter(({ admission_Status }: any) => admission_Status === 'Checked In').length

    const ticketsSales = getVariantNameData(tickets)

    statusDistribution = [
      { status: 'Ventas', count: formatCurrency(totalOrderIdSum), percentage: 0, tickets: ticketsSales },
      { status: 'Entradas', count: formatNumber(totalRecords), percentage: 0, tickets: ticketsSales },
      { status: 'Admisión', count: formatNumber(totalCheckedIn), percentage: (totalCheckedIn / totalRecords) * 100, tickets: ticketsSales },
    ]
  }

  return statusDistribution
}