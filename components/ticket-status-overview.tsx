import React from 'react'
import PresetSales from '@/components/preset-sales'
import PresetTickets from '@/components/preset-tickets'
import PresetAdmission from '@/components/preset-admission'
import { Ticket } from '@/types/ticket'
import getVariations from '@/utils/getVariantNameData'

// Funciones de formato
function formatCurrency(amount: number) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount)
}

function formatNumber(number: number) {
  return number.toLocaleString('es-AR')
}

type TicketStatus = {
  status: string
  count: string
  percentage: number
  tickets: any
}

interface TicketStatusOverviewProps {
  tickets: Ticket[]
}

const TicketStatusOverview: React.FC<TicketStatusOverviewProps> = ({ tickets }) => {
  let statusDistribution: TicketStatus[] = []

  if (tickets.length > 0) {
    const totalRecords = tickets.length
    const totalOrderIdSum = tickets.reduce((sum: number, { ticket_Price }: any) => sum + parseInt(ticket_Price), 0)
    const totalCheckedIn = tickets.filter(({ admission_Status }: any) => admission_Status === 'Checked In').length

    const ticketsSales = getVariations(tickets)

    statusDistribution = [
      { status: 'Ventas', count: formatCurrency(totalOrderIdSum), percentage: 0, tickets: ticketsSales },
      { status: 'Entradas', count: formatNumber(totalRecords), percentage: 0, tickets: ticketsSales },
      { status: 'Admisión', count: formatNumber(totalCheckedIn), percentage: (totalCheckedIn / totalRecords) * 100, tickets: ticketsSales },
    ]
  }

  return (
      <section className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {statusDistribution.map(({ status, count, percentage, tickets }) => {
          if (status === 'Ventas') return <PresetSales percentage={percentage} count={count} status={status} tickets={tickets} />
          if (status === 'Entradas') return <PresetTickets percentage={percentage} count={count} status={status} tickets={tickets} />
          if (status === 'Admisión') return <PresetAdmission percentage={percentage} count={count} status={status} tickets={tickets} />
          return null;
        })}
      </section>
  )
}

export default TicketStatusOverview
