"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_TICKETS } from '../lib/queries';
import { columns as originalColumns } from '../components/columns';
import { DataTable } from '../components/data-table';
import { UserNav } from '../components/user-nav'
import { DataTableColumnHeader } from '../components/data-table-column-header'; // Asegúrate de ajustar la ruta al archivo correcto
import { DataTableFacetedFilter } from '../components/data-table-faceted-filter'; ;
import TicketStatusOverview from '../components/TicketStatusOverview';
import { MainNav } from '../components/main-nav';
import { Button } from '../components/ui/button';



// Funciones de formato
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
}

function formatNumber(number) {
  return number.toLocaleString('es-AR');
}

export default function TicketPage() {
  const { loading, error, data } = useSuspenseQuery(GET_TICKETS, {
    variables: { product_id: 253 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const tickets = data?.eventMagicTickets || [];
  let statusDistribution = [];

  if (tickets.length > 0) {
    const totalRecords = tickets.length;
    const totalOrderIdSum = tickets.reduce((sum, { ticket_Price }) => sum + parseInt(ticket_Price), 0);
    const totalCheckedIn = tickets.filter(({ admission_Status }) => admission_Status === 'Checked In').length;

    statusDistribution = [
      { status: 'Ventas', count: formatCurrency(totalOrderIdSum), percentage: 0 },
      { status: 'Entradas', count: formatNumber(totalRecords), percentage: 0 },
      { status: 'Admisión', count: formatNumber(totalCheckedIn), percentage: (totalCheckedIn / totalRecords) * 100 },
    ];
  }


  // Obtén los valores únicos para "Product Name" y "Variation Name"
  const uniqueProductNames = [...new Set(tickets.map(ticket => ticket.order_Status))];
  const uniqueVariationNames = [...new Set(tickets.map(ticket => ticket.variation_Name))];

  // Convierte estos valores únicos en opciones de filtro
  const productFilterOptions = uniqueProductNames.map(name => ({ label: name, value: name }));
  const variationFilterOptions = uniqueVariationNames.map(name => ({ label: name, value: name }));

  // Define las columnas con los filtros, incluyendo las opciones de filtro
  const columns = originalColumns.map(column => {
    if (column.accessorKey === "order_Status") {
      return createColumnWithFilter(column.accessorKey, "Estado", productFilterOptions);
    }
    if (column.accessorKey === "variation_Name") {
      return createColumnWithFilter(column.accessorKey, "Tipo de Entrada", variationFilterOptions);
    }
    return column;
  });

  return (
    <>
      <div className="border-b">
          <div className="flex h-16 items-center px-4">
          <div className="mr-auto flex items-center space-x-4">
              <UserNav />
            </div>
            <MainNav className="mx-6" />
          </div>
        </div>
      <div className="container relative">
        <section>
          <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
            <div className='flex items-center justify-between space-y-2'>
              <div>
                <h2 className='text-2xl font-bold tracking-tight'>Conferencia TOMATULUGAR: Habitación 24.7</h2>
                <p className='text-muted-foreground'>
                  https://evn.tk/ttl-h247
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Button variant="outline">Copy</Button>
                <Button variant="outline">Visitar</Button>
              </div>
            </div>
            <TicketStatusOverview statusDistribution={statusDistribution} /> {/* Nuevo componente para mostrar la distribución */}
            <DataTable data={tickets} columns={columns} />
          </div>
        </section>
      </div>
    </>
  );
}

function createColumnWithFilter(accessorKey, title, filterOptions) {
  return {
    id: accessorKey,
    accessorKey,
    header: ({ column }) => (
      <div>
        <DataTableFacetedFilter
          column={column}
          title={title}
          options={filterOptions}
        />
        <DataTableColumnHeader column={column} title={title} />
      </div>
    ),
    cell: ({ row }) => {
      let value = row.getValue(accessorKey);
      if (accessorKey === 'order_Status') {
        value = value === 'wc-completed' ? 'Pagada' : value === 'Pending' ? 'Pendiente' : value;
      }
      if (accessorKey === 'admission_Status') {
        value = value === 'Not Checked In' ? 'Sin admitir' : value;
      }
      return <div>{value}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  };
}
