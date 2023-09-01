import React, { createContext, useContext } from "react";

const FilteredDataContext = createContext<any[]>([]);

export const useFilteredData = () => {
  return useContext(FilteredDataContext);
};

export const FilteredDataProvider = ({ children, data }) => {
  return (
    <FilteredDataContext.Provider value={data}>
      {children}
    </FilteredDataContext.Provider>
  );
};
