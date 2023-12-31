"use client"

import Link from "next/link"
import { PinBottomIcon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

interface DataTableRowActionsProps {
  ticketHash: string
  ticketID: string
}

export function DataTableRowActions({
  ticketHash,
  ticketID,
}: DataTableRowActionsProps) {
  return (
    <div className="flex items-center justify-center">
      <Button
        variant="ghost"
        className="flex h-8 w-8 items-center justify-center p-0"
      >
        <PaperPlaneIcon className="h-4 w-4 -rotate-45" />
        <span className="sr-only">Send email</span>
      </Button>

      <Link
        href={`${process.env.NEXT_PUBLIC_EVENTIK_URL}/wp-content/uploads/fooevents/pdftickets/${ticketHash}-${ticketID}-${ticketHash}-${ticketID}.pdf`}
        className="flex h-8 w-8 items-center justify-center p-0"
        target="_blank"
      >
        <PinBottomIcon className="h-4 w-4" />
        <span className="sr-only">Download pdf</span>
      </Link>
    </div>
  )
}
