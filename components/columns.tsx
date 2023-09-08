'use client'

import { QueryID } from '@/types/query-id'
import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import formatDate from '@/utils/formatDate'
import formatVariationName from '@/utils/formatVariationName'
import { Ticket } from '@/types/ticket'
import queryIdTranslate from '@/utils/queryIdTranslate'
import { admissionStatusTranslate, orderStatusTranslate } from '@/utils/valuesTranslate'

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: QueryID.ORDER_ID,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.ORDER_ID)} />,
    cell: ({ row }) => {
      return (
        <div className='flex'>
          <span className='max-w-[65px] truncate font-medium'># {row.getValue(QueryID.ORDER_ID)}</span>
        </div>
      )
    },  
  },
  {
    accessorKey: QueryID.ORDER_STATUS,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.ORDER_STATUS)} />,
    cell: ({ row }) => {
      let value = orderStatusTranslate(row.getValue(QueryID.ORDER_STATUS))
      const pending = value === 'Pendiente'

      return (
        <div className={`${!pending ? 'bg-green-50' : 'bg-orange-50'} px-2 py-1 w-fit rounded-md flex justify-center`}>
          <p className={`${!pending ? 'text-green-700' : 'text-orange-700'} text-xs font-semibold leading-4 `}>{value}</p>  
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: QueryID.ORDER_DATE,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.ORDER_DATE)} />,
    cell: ({ row }) => {
      const date = formatDate(row.getValue(QueryID.ORDER_DATE))

      return (
        <div className='text-muted-foreground'>{date}</div>
      )
    },
  },
  {
    accessorKey: QueryID.TICKET_ID,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.TICKET_ID)} />,
    cell: ({ row }) => {
      return (
        <div className='text-muted-foreground'># {row.getValue(QueryID.TICKET_ID)}</div>
      )
    },
  },
  {
    accessorKey: QueryID.VARIATION_NAME,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.VARIATION_NAME)} />,
    cell: ({ row }) => {
      return (
        <div className='flex'>
          <span className='max-w-[180px] truncate font-medium text-muted-foreground'>
            {formatVariationName(row.getValue(QueryID.VARIATION_NAME))}
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
    accessorFn: ( row: any ) => {
      const values = [QueryID.ATTENDEE_FIRST_NAME, QueryID.ATTENDEE_LAST_NAME].map(key => row[key])
      return `${values.join(' ')}`
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.ATTENDEE)} />,
    cell: ({ row }) => {
      return (
        <div className='flex'>
          <span className='max-w-[140px] truncate font-medium'>
            {row.original.attendee_Name} {row.original.attendee_LastName}
          </span>
        </div>
      )
    }
  },
  {
    id: `${QueryID.PURCHASER}`,
    accessorFn: ( row: any ) => {
      const values = [QueryID.PURCHASER_FIRST_NAME, QueryID.PURCHASER_LAST_NAME].map(key => row[key])
      return `${values.join(' ')}`
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.PURCHASER)} />,
    cell: ({ row }) => {
      return (
        <div className='flex'>
          <span className='max-w-[140px] truncate text-muted-foreground'>
            {row.original.purchaser_FirstName} {row.original.purchaser_LastName}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: QueryID.PURCHASER_EMAIL,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.PURCHASER_EMAIL)} />,
    cell: ({ row }) => {
      return (
        <div className='flex'>
          <span className='max-w-[140px] truncate text-muted-foreground'>
            {row.getValue(QueryID.PURCHASER_EMAIL)}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: QueryID.ADMISSION_STATUS,
    header: ({ column }) => <DataTableColumnHeader column={column} title={queryIdTranslate(QueryID.ADMISSION_STATUS)} />,
    cell: ({ row }) => {
      const pending = admissionStatusTranslate(row.original.admission_Status) === 'Pendiente'
      const styleAccessed = 'bg-black text-white border-white'

      return (
        <div className={`${!pending && styleAccessed} max-w-[75px] px-2 py-1 w-fit flex justify-center border rounded-md`}>
          <p className='text-xs font-medium leading-4'>
            {admissionStatusTranslate(row.getValue(QueryID.ADMISSION_STATUS))}
          </p>
        </div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  },
]
