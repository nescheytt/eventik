import type { Ticket } from '@/types/ticket'

type AdmissionData = {
  variation_Name: string
  totalCompletedWithChecked: number
  totalCompletedWithNotChecked: number
  percentageForVariationName: number
}

type TotalAdmisionData = {
  totalPercentageAdmission: number
  totalAdmission: number
  totalCurrentAdmission: number
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
    const variationName = ticket.variation_Name

    // Si la variación no existe en el arreglo, la agregamos
    if (!acc.find((variation: AdmissionData) => variation.variation_Name === variationName)) {
      acc.push({
        variation_Name: variationName,
        totalCompletedWithChecked: 0,
        totalCompletedWithNotChecked: 0,
        percentageForVariationName: 0
      })
    }
    
    // Actualizamos el contador de tickets completados con check-in
    if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Checked In") {
      acc.find((variation: AdmissionData) => {
        return variation.variation_Name === variationName && variation.totalCompletedWithChecked++
      })
    }

    // Actualizamos el contador de tickets completados sin check-in
    if (ticket.order_Status === "wc-completed" && ticket.admission_Status === "Not Checked In") {
      acc.find((variation: AdmissionData) => {
        return variation.variation_Name === variationName && variation.totalCompletedWithNotChecked++
      })
    }

    // Calculamos el porcentaje
    acc.find((variation: AdmissionData) => {
      variation.percentageForVariationName = variation.totalCompletedWithChecked / Math.max(variation.totalCompletedWithChecked, variation.totalCompletedWithNotChecked) * 100
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
  const totalPercentageAdmission = data.reduce((acc, item) => acc + item.percentageForVariationName, 0)
  const totalAdmission = data.reduce((acc, item) => acc + item.totalCompletedWithNotChecked, 0)
  const totalCurrentAdmission = data.reduce((acc, item) => acc + item.totalCompletedWithChecked, 0)

  return {
    totalPercentageAdmission,
    totalAdmission,
    totalCurrentAdmission
  }
}
