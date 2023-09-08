'use client'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GET_TICKETS } from '@/lib/queries'
import HeroTitle from '@/components/hero-title'
import DataTable from '@/components/data-table'
import TicketStatusOverview from '@/components/ticket-status-overview'

const NEXT_PUBLIC_EVENT_PRODUCT_ID = parseInt(process.env.NEXT_PUBLIC_EVENT_PRODUCT_ID!)

export default function TicketPage() {
  const { error, data } = useSuspenseQuery<any>(GET_TICKETS, {
    variables: { product_id: NEXT_PUBLIC_EVENT_PRODUCT_ID }
  })
  
  const tickets = data?.eventMagicTickets || []

  if (error) {
    return <div>Error</div>
  }

  return (
    <main className="hidden container relative md:flex md:flex-col py-8 px-16 gap-y-8">
      <HeroTitle />
      <TicketStatusOverview tickets={tickets} />
      <DataTable data={tickets} />
    </main>
  )
}