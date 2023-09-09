import type { Ticket } from '@/types/ticket'
import type { GetAdmissionData } from '@/utils/getAdmissionData'
import type { GetVariantNameData } from '@/utils/getVariantNameData'
import formatCurrency from '@/utils/formatCurrency'
import formatNumber from '@/utils/formatNumber'
import getVariantNameData from '@/utils/getVariantNameData'
import getAdmissionData from '@/utils/getAdmissionData'

type StatusDistribution = {
  count: string
  status: string
  percentage: number
  tickets: GetAdmissionData[] | GetVariantNameData[]
}

export default function getStatusDistributionData(tickets: Ticket[]) {
  let statusDistribution: StatusDistribution[] = []

  if (tickets.length > 0) {
    const totalRecords = tickets.length
    const totalOrderIdSum = tickets.reduce((sum: number, { ticket_Price }: any) => sum + parseInt(ticket_Price), 0)
    const totalCheckedIn = tickets.filter(({ admission_Status }: any) => admission_Status === 'Checked In').length

    const dataSales: GetVariantNameData[] = getVariantNameData(tickets)
    const dataAdmission: GetAdmissionData[] = getAdmissionData(tickets)

    statusDistribution = [
      { status: 'Ventas', count: formatCurrency(totalOrderIdSum), percentage: 0, tickets: dataSales },
      { status: 'Entradas', count: formatNumber(totalRecords), percentage: 0, tickets: dataSales },
      { status: 'Admisión', count: formatNumber(totalCheckedIn), percentage: (totalCheckedIn / totalRecords) * 100, tickets: dataAdmission },
    ]
  }

  return statusDistribution
}