import type { Ticket } from "@/types/ticket"
import { getClient } from "@/lib/client"
import { GET_TICKETS } from "@/lib/queries"

const NEXT_PUBLIC_EVENT_PRODUCT_ID = parseInt(
  String(process.env.NEXT_PUBLIC_EVENT_PRODUCT_ID)
)

export async function Tickets(): Promise<Ticket[]> {
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

  return data?.eventMagicTickets
}
