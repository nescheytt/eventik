import type { Ticket } from "@/types/ticket"
import { StatusDistribution } from "@/types/status-distribution"
import PresetSales from "@/components/preset-sales"
import PresetTickets from "@/components/preset-tickets"
import PresetAdmission from "@/components/preset-admission"
import { getStatusDistribution } from "@/utils/get-status-distribution"

export default function TicketStatusOverview({
  tickets,
}: {
  tickets: Ticket[]
}) {
  const statusDistribution = getStatusDistribution(tickets)

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {statusDistribution.map(({ status, data }) => {
        if (status === StatusDistribution.VENTAS)
          return <PresetSales key={status} data={data} />
        if (status === StatusDistribution.ENTRADAS)
          return <PresetTickets key={status} data={data} />
        if (status === StatusDistribution.ADMISION)
          return <PresetAdmission key={status} data={data} />
        return null
      })}
    </section>
  )
}
