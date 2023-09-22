"use client"

import { Suspense, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { HeroTitle } from "@/components/hero-title"
import { DataTable } from "@/components/data-table"
import { TicketStatusOverview } from "@/components/ticket-status-overview"
import { columns } from "@/components/columns"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { GET_TICKETS } from "@/lib/queries"

export default function TicketPage() {
  const [selectedProduct, setSelectedProduct] = useState(253)

  const { data } = useSuspenseQuery(GET_TICKETS, {
    variables: { product_id: selectedProduct },
  })

  return (
    <ErrorBoundary fallback={<div>Algo salió mal</div>}>
      <Suspense fallback={<div>Cargando...</div>}>
        <main className="container flex flex-col gap-y-4 px-4 pb-12 pt-4">
          <HeroTitle
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <TicketStatusOverview tickets={data.eventMagicTickets} />
          <DataTable data={data.eventMagicTickets} columns={columns} />
        </main>
      </Suspense>
    </ErrorBoundary>
  )
}
