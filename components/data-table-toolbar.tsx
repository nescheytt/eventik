"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DataTableViewOptions } from "@/components/data-table-view-options"
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter"

import setTranslateQueryId from "@/utils/setTranslateQueryId"
import getFilterOptions from "@/utils/getFilterOptions"
import { QueryID } from "@/types/query-id"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: TData[]
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

export function DataTableToolbar<TData>({ table, data, globalFilter, setGlobalFilter }: DataTableToolbarProps<TData>) {
  // generamos los options para cada filter
  const { optionsStatus, optionsTickets } = getFilterOptions({ data })

  // Comprueba si hay filtros aplicados en las columnas
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      {/* Filtro de   tareas */}
      <div className="w-full lg:w-fit flex flex-col lg:flex-row items-center gap-4">
        <Input
          placeholder="Buscar"
          value={globalFilter ?? ""}
          onChange={(event) => 
            setGlobalFilter(event.target.value)
          }
          className="h-10 lg:h-8 w-full lg:w-[250px]"
        />

        <div className="w-full lg:w-fit flex flex-col md:flex-row justify-center lg:justify-start gap-4">
          {table.getColumn("orderStatus") && (
            <DataTableFacetedFilter
              column={table.getColumn("orderStatus")}
              title={setTranslateQueryId('orderStatus')}
              options={optionsStatus}
            />
          )}
          
          {table.getColumn("ticketName") && (
            <DataTableFacetedFilter
              column={table.getColumn("ticketName")}
              title={setTranslateQueryId('ticketName')}
              options={optionsTickets}
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
