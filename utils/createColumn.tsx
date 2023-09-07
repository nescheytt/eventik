import { ColumnDef, AccessorFnColumnDef } from '@tanstack/react-table';
import type { Ticket } from '@/types/ticket';
import { DataTableColumnHeader } from '@/components/data-table-column-header';

export function createSingleColumn(accessorKey: keyof Ticket, title: string): ColumnDef<Ticket> {
  return ({
    accessorKey,
    header: ({ column }) => <DataTableColumnHeader column={column} title={title} />,
    cell: ({ row }) => { return `${row.getValue(accessorKey)}` },
  })
};

export function createGroupColumn(accessorKeys: string[], title: string): AccessorFnColumnDef<Ticket> {
  return ({
    id: `${title}`,
    accessorFn: ( row: any ) => {
      const values = accessorKeys.map(key => row[key]);
      return values.join(" ");
    },
    header: ({ column }) => <DataTableColumnHeader column={column} title={title} />
  });
}