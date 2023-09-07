'use client'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GET_TICKETS } from '@/lib/queries'
import HeroTitle from '@/components/hero-title'
import DataTable from '@/components/data-table'
import TicketStatusOverview from '@/components/TicketStatusOverview'

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
    <main className="container relative">
      <section className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <HeroTitle />
      </section>

      <section className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <TicketStatusOverview tickets={tickets} />
        <DataTable data={tickets} />
      </section>
    </main>
  )
}