"use client"

import type { Ticket } from "@/types/ticket"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import DebouncedInput from "@/components/ui/debounced-input"
import { DataTableViewOptions } from "@/components/data-table-view-options"
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter"

import setTranslateQueryId from "@/utils/setTranslateQueryId"
import { orderStatusTranslate } from "@/utils/setTranslateValues"
import { formattedTicketName } from "@/utils/setFormatValues"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: any[];
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

type Options = {
  label: string
  value: string
}

// Componente principal
export function DataTableToolbar<TData>({ table, data, globalFilter, setGlobalFilter }: DataTableToolbarProps<TData>) {
  console.log('table get column', table.getColumn("orderStatus"));
  // Comprueba si hay filtros aplicados en las columnas
  const isFiltered = table.getState().columnFilters.length > 0;

  const uniqueProductNames: string[] = [...new Set(data?.map((ticket) => ticket.orderStatus))];
  const uniqueTicketNames: string[] = [...new Set(data?.map((ticket) => ticket.ticketName))];

  const orderStatusOptions: Options[] = uniqueProductNames.map((name: string) => ({
    label: orderStatusTranslate(name),
    value: name
  }));
  const ticketNameOptions: Options[] = uniqueTicketNames.map((name: string) => ({
    label: formattedTicketName(name),
    value: name
  }));

  return (
    // <div className="grid grid-flow-row grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-4">
    <div className="flex items-center justify-between">
      {/* Filtro de   tareas */}
      <div className="w-full lg:w-fit flex flex-col lg:flex-row items-center gap-4">
        <DebouncedInput
          value={globalFilter ?? ''}
          placeholder="Buscar"
          onChange={value => setGlobalFilter(String(value))}
          className="w-full lg:w-fit h-10 md:h-9 px-4 py-1 border rounded-md border-zinc-200 shadow-sm"
        />

        <div className="w-full lg:w-fit flex justify-center lg:justify-start gap-4">
          {table.getColumn("orderStatus") && (
            <DataTableFacetedFilter
              column={table.getColumn("orderStatus")}
              title={setTranslateQueryId('orderStatus')}
              options={orderStatusOptions}
            />
          )}
          
          {table.getColumn("ticketName") && (
            <DataTableFacetedFilter
              column={table.getColumn("ticketName")}
              title={setTranslateQueryId('ticketName')}
              options={ticketNameOptions}
            />
          )}
        </div>

        {/* Botón para restablecer filtros */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Limpiar filtros
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Opciones adicionales para la vista de la tabla */}
      <div className="hidden lg:flex lg:col-span-1 lg:self-end">
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
};
