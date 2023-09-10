import type { Ticket } from '@/types/ticket'
import type { GetSalesData } from '@/utils/getSalesData'
import type { GetTicketData } from '@/utils/getTicketData'
import type { GetAdmissionData } from '@/utils/getAdmissionData'

import getSalesData from '@/utils/getSalesData'
import getTicketData from '@/utils/getTicketData'
import getAdmissionData from '@/utils/getAdmissionData'

import { formattedAmount, formattedNumber } from '@/utils/setFormatValues'

type StatusDistribution = {
  count: string
  status: string
  percentage: number
  data: any // TODO: add types
}

export default function getStatusDistributionData(tickets: Ticket[]) {
  let statusDistribution: StatusDistribution[] = []

  if (tickets.length > 0) {
    const totalRecords = tickets.length
    const totalOrderIdSum = tickets.reduce((sum: number, { ticket_Price }: any) => sum + parseInt(ticket_Price), 0)
    const totalCheckedIn = tickets.filter(({ admission_Status }: any) => admission_Status === 'Checked In').length

    const dataSales: GetSalesData[] = getSalesData(tickets)
    const dataTickets: GetTicketData = getTicketData(tickets)
    const dataAdmission: GetAdmissionData = getAdmissionData(tickets)

    statusDistribution = [
      { status: 'Ventas', count: formattedAmount(totalOrderIdSum), percentage: 0, data: dataSales },
      { status: 'Entradas', count: formattedNumber(totalRecords), percentage: 0, data: dataTickets },
      { status: 'Admisión', count: formattedNumber(totalCheckedIn), percentage: (totalCheckedIn / totalRecords) * 100, data: dataAdmission },
    ]
  }

  return statusDistribution
}