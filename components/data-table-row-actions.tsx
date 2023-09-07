"use client"

import { PinBottomIcon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex">
      <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        <PaperPlaneIcon className="h-4 w-4 -rotate-45" />
        <span className="sr-only">Download table</span>
      </Button>

      <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        <PinBottomIcon className="h-4 w-4" />
        <span className="sr-only">Download table</span>
      </Button>
    </div>
  )
}
