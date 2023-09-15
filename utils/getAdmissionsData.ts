import type { Ticket } from '@/types/ticket'
import { formattedNumber } from '@/utils/setFormatValues'

type AdmissionData = {
  ticketName: string
  totalCompletedWithChecked: number
  totalCompletedWithNotChecked: number
  percentageForTicketName: number
}

type TotalAdmisionData = {
  totalPercentageAdmission: number
  totalAdmission: string
  totalCurrentAdmission: string
}

export type GetAdmissionsData = {
  admissions: AdmissionData[]
  totalData: TotalAdmisionData
}

export default function getAdmissionsData(tickets: Ticket[]): GetAdmissionsData {
  // Creamos un arreglo vacío para almacenar las variaciones
  let admissions: AdmissionData[] = []

  // Iteramos sobre el array de entradas usando el método reduce()
  admissions = tickets.reduce((acc: AdmissionData[], ticket) => {
    // Obtenemos el nombre de la variación
    const ticketName = ticket.ticketName

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: AdmissionData) => variation.ticketName === ticketName)) {
      acc.push({
        ticketName: ticketName,
        totalCompletedWithChecked: 0,
        totalCompletedWithNotChecked: 0,
        percentageForTicketName: 0
      })
    }
    
    // Actualizamos el contador de tickets completados con check-in
    if (ticket.orderStatus === "wc-completed" && ticket.ticketStatus === "Checked In") {
      acc.find((variation: AdmissionData) => {
        return variation.ticketName === ticketName && variation.totalCompletedWithChecked++
      })
    }

    // Actualizamos el contador de tickets completados sin check-in
    if (ticket.orderStatus === "wc-completed" && ticket.ticketStatus === "Not Checked In") {
      acc.find((variation: AdmissionData) => {
        return variation.ticketName === ticketName && variation.totalCompletedWithNotChecked++
      })
    }

    // Calculamos el porcentaje
    acc.find((variation: AdmissionData) => {
      variation.percentageForTicketName = variation.totalCompletedWithChecked / Math.max(variation.totalCompletedWithChecked, variation.totalCompletedWithNotChecked) * 100
    })

    // Devolvemos el arreglo acumulado
    return acc
  }, [])

  // Obtenemos los datos totales de las admisiones
  const totalData = sumTotalAdmissionData(admissions)

  // Devolvemos el arreglo con las admisiones y su dato extra totalData
  return {
    admissions,
    totalData
  }
}

function sumTotalAdmissionData(data: AdmissionData[]): TotalAdmisionData {
  const totalPercentageAdmission = data.reduce((acc, item) => acc + item.percentageForTicketName, 0)
  const totalAdmission = data.reduce((acc, item) => acc + item.totalCompletedWithNotChecked, 0)
  const totalCurrentAdmission = data.reduce((acc, item) => acc + item.totalCompletedWithChecked, 0)

  const formattedTotalAdmission = formattedNumber(totalAdmission)
  const formattedTotalCurrentAdmission = formattedNumber(totalCurrentAdmission)

  return {
    totalPercentageAdmission,
    totalAdmission: formattedTotalAdmission,
    totalCurrentAdmission: formattedTotalCurrentAdmission
  }
}
