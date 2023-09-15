"use client"

import Link from "next/link"
import { PinBottomIcon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

interface DataTableRowActionsProps<TData> {
  ticketHash: string
  ticketID: string
}

export function DataTableRowActions<TData>({
  ticketHash,
  ticketID
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex items-center justify-center">
      <Button variant="ghost" className="h-8 w-8 p-0 flex items-center justify-center">
        <PaperPlaneIcon className="h-4 w-4 -rotate-45" />
        <span className="sr-only">Send email</span>
      </Button>

      <Link
        href={`${process.env.NEXT_PUBLIC_EVENTIK_URL}/wp-content/uploads/fooevents/pdftickets/${ticketHash}-${ticketID}-${ticketHash}-${ticketID}.pdf`}
        className="h-8 w-8 p-0 flex items-center justify-center"
        target="_blank"
      >
        <PinBottomIcon className="h-4 w-4" />
        <span className="sr-only">Download pdf</span>
      </Link>
    </div>
  )
}
