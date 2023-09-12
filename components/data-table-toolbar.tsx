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
import { formattedVariationName } from "@/utils/setFormatValues"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: Ticket[];
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

type Options = {
  label: string
  value: string
}

// Componente principal
export function DataTableToolbar<TData>({ table, data, globalFilter, setGlobalFilter }: DataTableToolbarProps<TData>) {
  // Comprueba si hay filtros aplicados en las columnas
  const isFiltered = table.getState().columnFilters.length > 0;

  const uniqueProductNames: string[] = [...new Set(data?.map((ticket) => ticket.order_Status))];
  const uniqueVariationNames: string[] = [...new Set(data?.map((ticket) => ticket.variation_Name))];

  const orderStatusOptions: Options[] = uniqueProductNames.map((name: string) => ({
    label: orderStatusTranslate(name),
    value: name
  }));
  const variationNameOptions: Options[] = uniqueVariationNames.map((name: string) => ({
    label: formattedVariationName(name),
    value: name
  }));

  return (
    <div className="grid grid-flow-row grid-rows-2 grid-cols-1 gap-4">
      {/* Filtro de tareas */}
      <DebouncedInput
        value={globalFilter ?? ''}
        placeholder="Buscar"
        onChange={value => setGlobalFilter(String(value))}
        className="h-10 md:h-9 px-4 py-1 border rounded-md border-zinc-200 shadow-sm"
      />

      <div className="flex items-center gap-4">
        {table.getColumn("order_Status") && (
          <DataTableFacetedFilter
            column={table.getColumn("order_Status")}
            title={setTranslateQueryId('order_Status')}
            options={orderStatusOptions}
          />
        )}
        
        {table.getColumn("variation_Name") && (
          <DataTableFacetedFilter
            column={table.getColumn("variation_Name")}
            title={setTranslateQueryId('variation_Name')}
            options={variationNameOptions}
          />
        )}

        {/* Botón para restablecer filtros */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Opciones adicionales para la vista de la tabla */}
      <DataTableViewOptions table={table} />
    </div>
  );
};
