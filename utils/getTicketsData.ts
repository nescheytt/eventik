import type { Ticket } from '@/types/ticket'

type TicketData = {
  variation_Name: string
  totalCompleted: number
  totalCompletedWithChecked: number
  totalTickets: number
  totalRemain: number
}

type TotalTicketData = {
  totalCompleted: number
}

export type GetTicketsData = {
  tickets: TicketData[]
  totalData: TotalTicketData
}

export default function getTicketsData(data: Ticket[]): GetTicketsData {
  // Creamos un arreglo vacío para almacenar las variaciones
  let tickets: TicketData[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  tickets = data.reduce((acc: TicketData[], ticket) => {
    // Obtenemos el nombre de la variación
    const variationName = ticket.variation_Name

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: TicketData) => variation.variation_Name === variationName)) {
      acc.push({
        variation_Name: variationName,
        totalCompleted: 0,
        totalCompletedWithChecked: 0,
        totalTickets: 700, // TODO: por el momento queda harcodeado hasta definir el valor
        totalRemain: 0
      })
    }
    
    // Actualizamos el contador de tickets completados con check-in
    if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Checked In") {
      acc.find((variation: TicketData) => {
        return variation.variation_Name === variationName && variation.totalCompletedWithChecked++
      })
    }

    // Actualizamos el contador de tickets con estado "wc-completed"
    if (ticket.order_Status === "wc-completed") {
      acc.find((variation: TicketData) => {
        return variation.variation_Name === variationName && variation.totalCompleted++
      })
    }

    // Calculamos la cantidad de tickets que quedan disponibles
    acc.find((variation: TicketData) => {
      variation.totalRemain = variation.totalTickets - variation.totalCompletedWithChecked
    })

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  const totalData = sumTotalTicketsData(tickets)

  // Devolvemos el arreglo con los tickets
  return { tickets, totalData }
}

function sumTotalTicketsData(data: TicketData[]): TotalTicketData {
  const totalCompleted = data.reduce((acc, item) => acc + item.totalCompleted, 0)

  return {
    totalCompleted,
  }
}
