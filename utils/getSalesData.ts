import type { Ticket } from '@/types/ticket'
import { formattedAmount, formattedNumber } from './setFormatValues'

export type TicketData = {
  variation_Name: string
  ticketCount: number
  ticketPrice: number
  ticketTotalPrice: number
}

type TotalSalesData = {
  totalCount: string
  totalPrice: string
}

export type GetSalesData = {
  variations: TicketData[]
  totalData: TotalSalesData
}

export default function getSalesData(data: Ticket[]): GetSalesData {
  // Creamos un arreglo vacío para almacenar las variaciones
  let variations: TicketData[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  variations = data.reduce((acc: TicketData[], ticket) => {
    // Obtenemos el nombre de la variación
    const variationName = ticket.variation_Name

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: TicketData) => variation.variation_Name === variationName)) {
      acc.push({
        variation_Name: variationName,
        ticketCount: 1,
        ticketPrice: parseInt(ticket.ticket_Price),
        ticketTotalPrice: 0
      })
    } else {
      // Si la variación existe en el arreglo, incrementamos el contador
      acc.find((variation: TicketData) => {
        return variation.variation_Name === variationName && formattedNumber(variation.ticketCount++)
      })
    }

    acc.find((variation: TicketData) => {
      return variation.variation_Name === variationName && (variation.ticketTotalPrice = variation.ticketCount * variation.ticketPrice)
    })

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  const totalData = sumTotalSalesData(variations)

  // Devolvemos el arreglo con las variaciones
  return {
    variations,
    totalData
  }
}

function sumTotalSalesData(data: TicketData[]): TotalSalesData {
  const totalCount = formattedNumber(data.reduce((acc, item) => acc + item.ticketCount, 0))
  const totalPrice = formattedAmount(data.reduce((acc, item) => acc + item.ticketTotalPrice, 0))

  return {
    totalCount,
    totalPrice,
  }
}
