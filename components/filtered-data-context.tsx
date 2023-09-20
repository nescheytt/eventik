import React, { createContext, useContext } from "react"
import type { Ticket } from "@/types/ticket"

const FilteredDataContext = createContext<Ticket[]>([])

export const useFilteredData = () => {
  return useContext(FilteredDataContext)
}

export const FilteredDataProvider = ({
  children,
  data,
}: {
  children: React.ReactNode
  data: Ticket[]
}) => {
  return (
    <FilteredDataContext.Provider value={data}>
      {children}
    </FilteredDataContext.Provider>
  )
}
