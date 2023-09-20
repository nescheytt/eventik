import { getClient } from "@/lib/client"
import { GET_TICKETS } from "@/lib/queries"
import HeroTitle from "@/components/hero-title"
import DataTable from "@/components/data-table"
import TicketStatusOverview from "@/components/ticket-status-overview"
import { columns } from "@/components/columns"

const NEXT_PUBLIC_EVENT_PRODUCT_ID = parseInt(
  process.env.NEXT_PUBLIC_EVENT_PRODUCT_ID!
)

export default async function TicketPage() {
  const client = getClient()

  const { data } = await client.query({
    query: GET_TICKETS,
    variables: {
      product_id: NEXT_PUBLIC_EVENT_PRODUCT_ID,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  })

  return (
    <main className="container flex flex-col gap-y-4 px-4 py-4 pb-12">
      <HeroTitle />
      <TicketStatusOverview tickets={data.eventMagicTickets} />
      <DataTable data={data.eventMagicTickets} columns={columns} />
    </main>
  )
}
