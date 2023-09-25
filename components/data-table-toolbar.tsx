"use client"

import { Dispatch, SetStateAction } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DataTableViewOptions } from "@/components/data-table-view-options"
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter"

import { setTranslateQueryId } from "@/utils/set-translate-query-id"
import { getFilterOptions } from "@/utils/get-filter-options"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: TData[]
  globalFilter: string
  setGlobalFilter: Dispatch<SetStateAction<string>>
}

export function DataTableToolbar<TData>({
  table,
  data,
  globalFilter,
  setGlobalFilter,
}: DataTableToolbarProps<TData>) {
  // generamos los options para cada filter
  const { optionsStatus, optionsTickets, optionsCoupons, optionsManual } =
    getFilterOptions({ data })

  // Comprueba si hay filtros aplicados en las columnas
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      {/* Filtro de   tareas */}
      <div className="flex w-full flex-col items-center gap-4 lg:w-fit lg:flex-row">
        <Input
          placeholder="Buscar"
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="h-10 w-full lg:h-8 lg:w-[250px]"
        />

        <div className="flex w-full flex-col justify-center gap-4 md:flex-row lg:w-fit lg:justify-start">
          {table.getColumn("orderStatus") && (
            <DataTableFacetedFilter
              column={table.getColumn("orderStatus")}
              title={setTranslateQueryId("orderStatus")}
              options={optionsStatus}
            />
          )}

          {table.getColumn("ticketName") && (
            <DataTableFacetedFilter
              column={table.getColumn("ticketName")}
              title={setTranslateQueryId("ticketName")}
              options={optionsTickets}
            />
          )}

          {table.getColumn("usedCoupon") && (
            <DataTableFacetedFilter
              column={table.getColumn("usedCoupon")}
              title={setTranslateQueryId("usedCoupon")}
              options={optionsCoupons}
            />
          )}

          {table.getColumn("orderAdminAddTicket") && (
            <DataTableFacetedFilter
              column={table.getColumn("orderAdminAddTicket")}
              title={setTranslateQueryId("orderAdminAddTicket")}
              options={optionsManual}
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
      <div className="hidden lg:col-span-1 lg:flex lg:self-end">
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
