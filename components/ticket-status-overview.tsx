import type { Ticket } from '@/types/ticket'
import { StatusDistribution } from '@/types/status-distribution'
import PresetSales from '@/components/preset-sales'
import PresetTickets from '@/components/preset-tickets'
import PresetAdmission from '@/components/preset-admission'
import getStatusDistributionData from '@/utils/getStatusDistributionData'

export default function TicketStatusOverview({ tickets } : { tickets: Ticket[] }) {
  const statusDistribution = getStatusDistributionData(tickets)

  return (
    <section className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {statusDistribution.map(({ status, count, percentage, data }) => {
        if (status === StatusDistribution.VENTAS) {
          return (
            <PresetSales key={status} percentage={percentage} count={count} status={status} tickets={data} />
          )
        }

        if (status === StatusDistribution.ENTRADAS) {
          return (
            <PresetTickets key={status} percentage={percentage} count={count} status={status} data={data} />
          )
        }

        if (status === StatusDistribution.ADMISION) {
          return (
            <PresetAdmission key={status} percentage={percentage} count={count} status={status} tickets={data} />
          )
        }

        return null
      })}
    </section>
  )
}