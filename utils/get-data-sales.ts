import type { TicketSales } from "@/types/ticket"
import {
  formattedAmount,
  formattedNumber,
  formattedVariationName,
} from "@/utils/set-format-values"

type TotalSalesData = {
  totalCount: string
  totalPrice: string
}

export type GetSalesData = {
  variations: TicketSales[]
  totalData: TotalSalesData
}

export function getDataSales(data: TicketSales[]): GetSalesData {
  const totalData = sumTotalSalesData(data)
  const formattedSalesData = formattedVariationValues(data)

  // Devolvemos el arreglo con las variaciones
  return {
    variations: formattedSalesData,
    totalData,
  }
}

// Formatea los valores totales renderizados en card Ventas y modal Ventas
function sumTotalSalesData(data: TicketSales[]): TotalSalesData {
  const totalRevenue = data.reduce((acc, item) => {
    const revenue = parseInt(item.totalRevenue) // Parsea el valor a un número entero

    if (!isNaN(revenue)) {
      return acc + revenue
    }
    return acc
  }, 0)

  const totalCount = data.reduce((acc, item) => {
    const variationsSold = parseInt(item.totalVariationsSold, 10) // Parsea el valor a un número entero

    if (!isNaN(variationsSold)) {
      return acc + variationsSold
    }
    return acc
  }, 0)

  const formattedTotalCount = formattedNumber(totalCount)
  const formattedTotalPrice = formattedAmount(totalRevenue)

  return {
    totalCount: formattedTotalCount,
    totalPrice: formattedTotalPrice,
  }
}

// Formatea los valores renderizados en modal Ventas
function formattedVariationValues(data: TicketSales[]): TicketSales[] {
  const formattedData = data.map((ticket) => {
    return {
      variationName: formattedVariationName(ticket.variationName),
      totalRevenue: formattedAmount(parseInt(ticket.totalRevenue)),
      totalVariationsSold: formattedNumber(
        parseInt(ticket.totalVariationsSold)
      ),
    }
  })

  return formattedData
}
