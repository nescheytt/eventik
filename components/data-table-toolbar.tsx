"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

// ... (otros imports)

// Componente principal
export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  // Comprueba si hay filtros aplicados en las columnas
  const isFiltered = table.getState().columnFilters.length > 0;

  // Función para actualizar filtros de múltiples columnas
  const updateFilters = (value: string) => {
    const columnsToFilter = [
      "attendee_Email", 
      "attendee_Name", 
      "attendee_LastName", 
      "purchaser_Email", 
      "purchaser_FirstName", 
      "purchaser_LastName", 
      "order_ID"
    ];
    columnsToFilter.forEach(columnKey => {
      table.getColumn(columnKey)?.setFilterValue(value);
    });
  };

  return (
    <div className="flex items-center justify-between">
      {/* Filtro de tareas */}
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Buscar..."
          onChange={(event) => updateFilters(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        
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
}
