import type { Ticket } from '@/types/ticket'

type Variations = {
  variation_Name: string
  ticket_Count: number
  ticket_Price: string
}

export default function getVariantNameData(tickets: Ticket[]): Variations[] {
  // Creamos un arreglo vacío para almacenar las variaciones
  let variations: Variations[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  variations = tickets.reduce((acc: Variations[], ticket) => {
    // Obtenemos el nombre de la variación
    const variationName = ticket.variation_Name

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: Variations) => variation.variation_Name === variationName)) {
      acc.push({
        variation_Name: variationName,
        ticket_Count: 1,
        ticket_Price: ticket.ticket_Price,
      })
    } else {
      // Si la variación existe en el arreglo, incrementamos el contador
      acc.find((variation: Variations) => { return variation.variation_Name === variationName && variation.ticket_Count++ })
    }

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  // Devolvemos el arreglo con las variaciones
  return variations
}
