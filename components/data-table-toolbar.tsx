"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { DataTableViewOptions } from "./data-table-view-options"
import DebouncedInput from "./ui/DebouncedInput"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import formatVariationName from "@/utils/formatVariationName"
import queryIdTranslate from "@/utils/queryIdTranslate"
import { orderStatusTranslate } from "@/utils/valuesTranslate"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: any
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

type Options = {
  label: string
  value: string
}

const orderStatus = [
  {
    value: 'wc-completed',
    label: 'wc-completed'
  },
  {
    value: 'wc-pending',
    label: 'wc-pending'
  }
]

// Componente principal
export function DataTableToolbar<TData>({ table, data, globalFilter, setGlobalFilter }: DataTableToolbarProps<TData>) {
  // Comprueba si hay filtros aplicados en las columnas
  const isFiltered = table.getState().columnFilters.length > 0;

  const uniqueProductNames: any = [...new Set(data?.map((ticket: any) => ticket.order_Status))];
  const uniqueVariationNames: any = [...new Set(data?.map((ticket: any) => ticket.variation_Name))];
  const productFilterOptions: Options[] = uniqueProductNames.map((name: any) => ({ label: orderStatusTranslate(name), name, value: name }));
  const variationFilterOptions: Options[] = uniqueVariationNames.map((name: any) => ({ label: formatVariationName(name), value: name }));

  return (
    <div className="flex items-center justify-between">
      {/* Filtro de tareas */}
      <div className="flex flex-1 items-center space-x-2">
        <DebouncedInput
          value={globalFilter ?? ''}
          placeholder="Buscar"
          onChange={value => setGlobalFilter(String(value))}
          className="h-9 px-4 py-1 border rounded-md border-zinc-200 shadow-sm"
        />

        {table.getColumn("order_Status") && (
          <DataTableFacetedFilter
            column={table.getColumn("order_Status")}
            title={queryIdTranslate('order_Status')}
            options={orderStatus}
          />
        )}
        {table.getColumn("variation_Name") && (
          <DataTableFacetedFilter
            column={table.getColumn("variation_Name")}
            title={queryIdTranslate('variation_Name')}
            options={variationFilterOptions}
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
