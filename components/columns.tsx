"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions"
import formatDate from "@/utils/formatDate";
import formatVariationName from "@/utils/formatVariationName";
import { Ticket } from "@/types/ticket";
import queryIdTranslate from "@/utils/queryIdTranslate";
import { admissionStatusTranslate, orderStatusTranslate } from "@/utils/valuesTranslate";

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: 'order_ID',
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('order_ID')} />,
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[65px] truncate font-medium"># {row.original.order_ID}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'order_Status',
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('order_Status')} />,
    cell: ({ row }) => {
      let value = orderStatusTranslate(row.getValue('order_Status'));
      const pending = value === "Pendiente";

      return (
        <div className={`${!pending ? 'bg-green-50' : 'bg-orange-50'} px-2 py-1 w-fit rounded-md flex justify-center`}>
          <p className={`${!pending ? 'text-green-700' : 'text-orange-700'} text-xs font-semibold leading-4 `}>{value}</p>  
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'order_Date',
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('order_Date')} />,
    cell: ({ row }) => {
      const date = formatDate(row.original.order_Date); 

      return (
        <div className="text-muted-foreground">{date}</div>
      );
    },
  },
  {
    accessorKey: 'ticket_ID',
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('ticket_ID')} />,
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground"># {row.original.ticket_ID}</div>
      );
    },
  },
  {
    accessorKey: 'variation_Name',
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('variation_Name')} />,
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[180px] truncate font-medium text-muted-foreground">
            {formatVariationName(row.original.variation_Name)}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "attendee",
    accessorFn: ( row: any ) => {
      const values = ['attendee_Name', 'attendee_LastName'].map(key => row[key]);
      return `${values.join(" ")}`;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('attendee')} />,
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[140px] truncate font-medium">
            {row.original.attendee_Name} {row.original.attendee_LastName}
          </span>
        </div>
      )
    }
  },
  {
    id: "purchaser",
    accessorFn: ( row: any ) => {
      const values = ['purchaser_FirstName', 'purchaser_LastName'].map(key => row[key]);
      return `${values.join(" ")}`;
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('purchaser')} />,
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[140px] truncate text-muted-foreground">
            {row.original.purchaser_FirstName} {row.original.purchaser_LastName}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: "purchaser_Email",
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('purchaser_Email')} />,
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[140px] truncate text-muted-foreground">
            {row.getValue("purchaser_Email")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'admission_Status',
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate('admission_Status')} />,
    cell: ({ row }) => {
      const pending = admissionStatusTranslate(row.original.admission_Status) === 'Pendiente';
      const styleAccessed = 'bg-black text-white border-white'

      return (
        <div className={`${!pending && styleAccessed} max-w-[75px] px-2 py-1 w-fit flex justify-center border rounded-md`}>
          <p className="text-xs font-medium leading-4">{admissionStatusTranslate(row.original.admission_Status)}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  },
];
