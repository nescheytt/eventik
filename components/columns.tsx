"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions"

export type Ticket = {
  order_Date: string;
  order_ID: string;
  order_Status: string;
  variation_Name: string;
  ticket_ID: string;
  ticket_Price: string;
  admission_Status: string;
  attendee_Name: string;
  attendee_LastName: string;
  attendee_Email: string;
  attendee_Telephone: string;
  purchaser_FirstName: string;
  purchaser_LastName: string;
  purchaser_Email: string;
  purchaser_Phone: string;
  created_Manually: string;
};

const createColumn = (accessorKey: keyof Ticket, title: string): ColumnDef<Ticket> => ({
  accessorKey,
  header: ({ column }) => <DataTableColumnHeader column={column} title={title} />,
  cell: ({ row }) => <div>{row.getValue(accessorKey)}</div>,
});

export const columns: ColumnDef<Ticket>[] = [
  createColumn("order_Date", "Fecha"),
  createColumn("order_ID", "Pedido"),
  createColumn("order_Status", "Estado"),
  createColumn("variation_Name", "Tipo Entrada"),
  createColumn("ticket_ID", "Entrada"),
  createColumn("ticket_Price", "Precio"),
  createColumn("admission_Status", "¿Admitido?"),
  createColumn("attendee_Name", "Nombre Asistente"),
  createColumn("attendee_LastName", "Apellido Asistente"),
  createColumn("attendee_Email", "Email Asistente"),
  createColumn("attendee_Telephone", "Teléfono Asistente"),
  createColumn("purchaser_FirstName", "Nombre Comprador"),
  createColumn("purchaser_LastName", "Apellido Comprador"),
  createColumn("purchaser_Email", "Purchaser Email"),
  createColumn("purchaser_Phone", "Purchaser Phone"),
  createColumn("created_Manually", "¿Manual?"),
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
