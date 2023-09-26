"use client"

import { Suspense, useState } from "react"

import { columns } from "@/components/columns"
import { HeroTitle } from "@/components/hero-title"
import { DataTable } from "@/components/data-table"
import { TicketStatusOverview } from "@/components/ticket-status-overview"

import { GET_TICKETS } from "@/lib/queries"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

export default function TicketPage() {
  const [selectedProduct, setSelectedProduct] = useState(253)

  const { data } = useSuspenseQuery(GET_TICKETS, {
    variables: { product_id: selectedProduct },
  })

  return (
    <main className="container flex flex-col gap-y-4 px-4 pb-12 pt-4">
      <Suspense fallback={<div>Cargando...</div>}>
        <HeroTitle
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <TicketStatusOverview
          tickets={data.eventMagicTickets}
          ticketSales={data.eventTicketSales}
        />
        <DataTable data={data.eventMagicTickets} columns={columns} />
      </Suspense>
    </main>
  )
}
