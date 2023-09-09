import type { Ticket } from '@/types/ticket'

export type GetAdmissionData = {
  variation_Name: string
  totalCompletedWithChecked: number
  totalCompletedWithNotChecked: number
  percentage: number
}

export default function getAdmissionData(tickets: Ticket[]): GetAdmissionData[] {
  // Creamos un arreglo vacío para almacenar las variaciones
  let admissions: GetAdmissionData[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  admissions = tickets.reduce((acc: GetAdmissionData[], ticket) => {
    // Obtenemos el nombre de la variación
    const variationName = ticket.variation_Name

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: GetAdmissionData) => variation.variation_Name === variationName)) {
      acc.push({
        variation_Name: variationName,
        totalCompletedWithChecked: 0,
        totalCompletedWithNotChecked: 0,
        percentage: 0
      })
    }
    
    // Actualizamos el contador de tickets completados con check-in
    if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Checked In") {
      acc.find((variation: GetAdmissionData) => {
        return variation.variation_Name === variationName && variation.totalCompletedWithChecked++
      })
    }

    // Actualizamos el contador de tickets completados sin check-in
    if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Not Checked In") {
      acc.find((variation: GetAdmissionData) => {
        return variation.variation_Name === variationName && variation.totalCompletedWithNotChecked++
      })
    }

    // Calculamos el porcentaje
    acc.find((variation: GetAdmissionData) => {
      variation.percentage = variation.totalCompletedWithChecked / Math.max(variation.totalCompletedWithChecked, variation.totalCompletedWithNotChecked) * 100
    })

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  // Devolvemos el arreglo con las variaciones
  return admissions
}
