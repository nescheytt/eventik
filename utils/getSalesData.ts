import type { TicketNew } from '@/types/ticket'
import { formattedAmount, formattedNumber, formattedVariationName } from '@/utils/setFormatValues'

export type TicketData = {
  ticketName: string
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

export default function getSalesData(data: TicketNew[]): GetSalesData {
  // Creamos un arreglo vacío para almacenar las variaciones
  let variations: TicketData[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  variations = data.reduce((acc: TicketData[], ticket) => {
    // Obtenemos el nombre de la variación
    const ticketName = ticket.ticketName

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: TicketData) => variation.ticketName === ticketName)) {
      acc.push({
        ticketName: ticketName,
        ticketCount: 0,
        ticketPrice: 0,
        ticketTotalPrice: 0
      })
    } else {
      // Si la variación existe en el arreglo, incrementamos el contador
      acc.find((variation: TicketData) => {
        return variation.ticketName === ticketName && variation.ticketCount++
      })
    }

    acc.find((variation: TicketData) => {
      return variation.ticketName === ticketName && (variation.ticketTotalPrice = variation.ticketCount * variation.ticketPrice)
    })

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  const totalData = sumTotalSalesData(variations)
  const formattedSalesData = formattedVariationValues(variations)

  // Devolvemos el arreglo con las variaciones
  return {
    variations: formattedSalesData,
    totalData
  }
}

function sumTotalSalesData(data: TicketData[]): TotalSalesData {
  const totalCount = data.reduce((acc, item) => acc + item.ticketCount, 0)
  const totalPrice = data.reduce((acc, item) => acc + item.ticketTotalPrice, 0)

  const formattedTotalCount = formattedNumber(totalCount)
  const formattedTotalPrice = formattedAmount(totalPrice)

  return {
    totalCount: formattedTotalCount,
    totalPrice: formattedTotalPrice,
  }
}

function formattedVariationValues(data: TicketData[]): any[] {
  const formattedData = data.map(ticket => {
    return {
      ticketName: formattedVariationName(ticket.ticketName),
      ticketCount: formattedNumber(ticket.ticketCount),
      ticketPrice: formattedAmount(ticket.ticketPrice),
      ticketTotalPrice: ticket.ticketTotalPrice
    }
  })

  return formattedData
}
