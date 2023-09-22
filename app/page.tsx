import { HeroTitle } from "@/components/hero-title"
import { DataTable } from "@/components/data-table"
import { TicketStatusOverview } from "@/components/ticket-status-overview"
import { columns } from "@/components/columns"
import { Tickets } from "@/services/tickets"

export default async function TicketPage() {
  const data = await Tickets()

  return (
    <main className="container flex flex-col gap-y-4 px-4 pb-12 pt-4">
      <HeroTitle />
      <TicketStatusOverview tickets={data} />
      <DataTable data={data} columns={columns} />
    </main>
  )
}
