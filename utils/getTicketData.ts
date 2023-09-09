import type { Ticket } from '@/types/ticket'

type TicketData = {
  variation_Name: string
  totalCompleted: number
  totalCompletedWithChecked: number
  totalRemain: number
}

export type GetTicketData = {
  tickets: TicketData[]
}

export default function getTicketData(data: Ticket[]): GetTicketData {
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
        totalCompletedWithChecked: 0,
        totalCompleted: 700, // TODO: por el momento queda harcodeado hasta definir el valor
        totalRemain: 0
      })
    }
    
    // Actualizamos el contador de tickets completados con check-in
    if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Checked In") {
      acc.find((variation: TicketData) => {
        return variation.variation_Name === variationName && variation.totalCompletedWithChecked++
      })
    }

    // Actualizamos el contador de tickets completados sin check-in
    // if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Not Checked In") {
    //   acc.find((variation: TicketData) => {
    //     return variation.variation_Name === variationName && variation.totalCompleted++
    //   })
    // }

    // Calculamos el porcentaje
    acc.find((variation: TicketData) => {
      variation.totalRemain = variation.totalCompleted - variation.totalCompletedWithChecked
    })

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  // Devolvemos el arreglo con las variaciones
  return {
    tickets
  }
}
