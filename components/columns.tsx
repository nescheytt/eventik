"use client"

import type { Ticket } from "@/types/ticket"
import { QueryID } from "@/types/query-id"
import { ColumnDef } from "@tanstack/react-table"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { DataTableRowActions } from "@/components/data-table-row-actions"

import { setTranslateQueryId } from "@/utils/set-translate-query-id"
import { setTranslateOrderStatus } from "@/utils/set-translate-order-status"
import { setTranslateAdmissionStatus } from "@/utils/set-translate-admissions-status"
import { formattedDate, formattedTicketName } from "@/utils/set-format-values"
import { CopyrightIcon, MSquareIcon } from "lucide-react"
import { setTranslateUsedCoupon } from "@/utils/set-translate-used-coupon"
import { setTranslateTicketManual } from "@/utils/set-translate-ticket-manual"

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: QueryID.ORDER_ID,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.ORDER_ID)}
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[65px] truncate font-medium">
            # {row.getValue(QueryID.ORDER_ID)}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: QueryID.ORDER_STATUS,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.ORDER_STATUS)}
      />
    ),
    cell: ({ row }) => {
      let value = setTranslateOrderStatus(row.getValue(QueryID.ORDER_STATUS))
      const completed = value === "Completa"
      const refunded = value === "Devuelta"

      const styles = {
        default:
          "px-2 py-1 w-full max-w-[73px] rounded-md flex justify-center text-xs font-semibold leading-4",
        completed: "bg-green-50 text-green-700",
        refunded: "bg-secondary text-muted-foreground",
      }

      return (
        <div
          className={`${styles.default} ${completed && styles.completed} ${refunded && styles.refunded
            }`}
        >
          {value}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: QueryID.TICKET_POST_DATE,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.TICKET_POST_DATE)}
      />
    ),
    cell: ({ row }) => {
      const date = formattedDate(row.getValue(QueryID.TICKET_POST_DATE))

      return <div className="text-muted-foreground">{date}</div>
    },
  },
  {
    accessorKey: QueryID.TICKET_ID,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.TICKET_ID)}
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">
          # {row.getValue(QueryID.TICKET_ID)}
        </div>
      )
    },
  },
  {
    accessorKey: QueryID.TICKET_NAME,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.TICKET_NAME)}
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[180px] truncate font-medium text-muted-foreground">
            {formattedTicketName(row.getValue(QueryID.TICKET_NAME))}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: `${QueryID.ATTENDEE}`,
    accessorFn: (row: any) => {
      const values = [
        QueryID.ATTENDEE_FIRST_NAME,
        QueryID.ATTENDEE_LAST_NAME,
      ].map((key) => row[key])
      return `${values.join(" ")}`
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.ATTENDEE)}
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[140px] truncate font-medium">
            {row.original.attendeeFirstName} {row.original.attendeeLastName}
          </span>
        </div>
      )
    },
  },
  {
    id: `${QueryID.PURCHASER}`,
    accessorFn: (row: any) => {
      const values = [
        QueryID.PURCHASER_FIRST_NAME,
        QueryID.PURCHASER_LAST_NAME,
      ].map((key) => row[key])
      return `${values.join(" ")}`
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.PURCHASER)}
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[140px] truncate text-muted-foreground">
            {row.original.purchaserFirstName} {row.original.purchaserLastName}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: QueryID.PURCHASER_EMAIL,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.PURCHASER_EMAIL)}
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[140px] truncate text-muted-foreground">
            {row.getValue(QueryID.PURCHASER_EMAIL)}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: QueryID.TICKET_STATUS,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={setTranslateQueryId(QueryID.TICKET_STATUS)}
      />
    ),
    cell: ({ row }) => {
      const checked =
        setTranslateAdmissionStatus(row.original.ticketStatus) === "Ingresó"
      const canceled =
        setTranslateAdmissionStatus(row.original.ticketStatus) === "Cancelado"

      const styles = {
        default:
          "max-w-[75px] px-2 py-1 w-fit flex justify-center border rounded-md",
        checked: "bg-black text-white border-white",
        canceled: "bg-secondary text-muted-foreground border-transparent",
      }

      return (
        <div
          className={`${styles.default} ${checked && styles.checked} ${canceled && styles.canceled
            }`}
        >
          <p className="text-xs font-medium leading-4">
            {setTranslateAdmissionStatus(row.getValue(QueryID.TICKET_STATUS))}
          </p>
        </div>
      )
    },
  },
  {
    accessorKey: `${QueryID.USED_COUPON}`,
    header: "",
    cell: ({ row }) => {
      const isCoupon = setTranslateUsedCoupon(row.original.usedCoupon) === "Si"
      return isCoupon ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CopyrightIcon className="h-4 w-4 text-orange-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Entrada con cupón</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : null
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: `${QueryID.ORDER_ADMIN_ADD_TICKET}`,
    header: "",
    cell: ({ row }) => {
      const isManual =
        setTranslateTicketManual(row.original.orderAdminAddTicket) === "Manual"
      return isManual ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <MSquareIcon className="h-4 w-4 text-orange-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Entrada ingresada manualmente</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : null
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        ticketHash={row.original.ticketHash}
        ticketID={row.original.ticketID}
      />
    ),
  },
]
