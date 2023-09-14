import type { TicketNew } from '@/types/ticket'
import { formattedAmount, formattedNumber, formattedVariationName } from '@/utils/setFormatValues'

type TicketData = {
  ticketName: string
  totalCompleted: number
  totalCompletedWithChecked: number
  totalTickets: number
  totalRemain: number
}

type TotalTicketData = {
  totalCompleted: string
}

export type GetTicketsData = {
  tickets: TicketData[]
  totalData: TotalTicketData
}

export default function getTicketsData(data: TicketNew[]): GetTicketsData {
  // Creamos un arreglo vacío para almacenar las variaciones
  let tickets: TicketData[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  tickets = data.reduce((acc: TicketData[], ticket) => {
    // Obtenemos el nombre de la variación
    const ticketName = ticket.ticketName

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: TicketData) => variation.ticketName === ticketName)) {
      acc.push({
        ticketName: ticketName,
        totalCompleted: 0,
        totalCompletedWithChecked: 0,
        totalTickets: 700, // TODO: por el momento queda harcodeado hasta definir el valor
        totalRemain: 0
      })
    }
    
    // Actualizamos el contador de tickets completados con check-in
    if (ticket.orderStatus === "wc-completed" && ticket.ticketStatus === "Checked In") {
      acc.find((variation: TicketData) => {
        return variation.ticketName === ticketName && variation.totalCompletedWithChecked++
      })
    }

    // Actualizamos el contador de tickets con estado "wc-completed"
    if (ticket.orderStatus === "wc-completed") {
      acc.find((variation: TicketData) => {
        return variation.ticketName === ticketName && variation.totalCompleted++
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
  const formattedTicketsData = formattedVariationValues(tickets)

  // Devolvemos el arreglo con los tickets
  return { tickets: formattedTicketsData, totalData }
}

function sumTotalTicketsData(data: TicketData[]): TotalTicketData {
  const totalCompleted = data.reduce((acc, item) => acc + item.totalCompleted, 0)
  const formattedTotalCompleted = formattedNumber(totalCompleted)

  return {
    totalCompleted: formattedTotalCompleted,
  }
}

function formattedVariationValues(data: TicketData[]): any[] {
  const formattedData = data.map(ticket => {
    return {
      ticketName: formattedVariationName(ticket.ticketName),
      totalCompleted: formattedNumber(ticket.totalCompleted),
      totalCompletedWithChecked: formattedNumber(ticket.totalCompletedWithChecked),
      totalTickets: formattedNumber(ticket.totalTickets),
      totalRemain: formattedNumber(ticket.totalRemain)
    }
  })

  return formattedData
}
