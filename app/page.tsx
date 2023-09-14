'use client'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GET_TICKETS } from '@/lib/queries'
import { GET_TICKETS_NEW } from '@/lib/queries-new'
import HeroTitle from '@/components/hero-title'
import DataTable from '@/components/data-table'
import TicketStatusOverview from '@/components/ticket-status-overview'
import { TypeDefinitionNode } from 'graphql'
import type { EventMagicTicket, TicketNew } from '@/types/ticket'

const NEXT_PUBLIC_EVENT_PRODUCT_ID = parseInt(process.env.NEXT_PUBLIC_EVENT_PRODUCT_ID!)



export default function TicketPage() {
  const { error, data } = useSuspenseQuery<EventMagicTicket>(GET_TICKETS_NEW, {
    variables: { product_id: NEXT_PUBLIC_EVENT_PRODUCT_ID }
  })

  const tickets = data?.eventMagicTickets || []

  console.log(tickets)

  if (error) return <div>Error</div>

  return (
    <main className='container flex flex-col p-4 gap-y-4'>
      <HeroTitle />
      <TicketStatusOverview tickets={tickets} />
      <DataTable data={tickets} />
    </main>
  )
}