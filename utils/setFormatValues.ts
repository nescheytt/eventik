
/**
 * El importe se formatea a moneda de Pesos Argentinos (ARS).
 * @param value 
 */
export function formattedAmount(value: number): string {
  const amountFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value)
  return amountFormat
}

/**
 * La fecha se formatea a Jan 1, 2023
 * @param value 
 */
export function formattedDate(value: string) {
  const date: Date = new Date(value)

  const formatOptions: Intl.DateTimeFormatOptions = { 
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }

  const dateFormat: string = date.toLocaleDateString('us-US', formatOptions)
  return dateFormat
}

/**
 * El valor se formatea con el número local de Español Argentina: 1.234.567,00
 * @param value
 */
export function formattedNumber(value: number): string {
  const valueFormat = value?.toLocaleString('es-AR')
  return valueFormat
}

/**
 * El valor se formatea removiendo el string "Entradas: "
 * "Entradas: Apple" a "Apple"
 * @param value 
 */
export function formattedVariationName(value: string): string {
  if (typeof value === 'string' && value.startsWith('Entradas:')) {
    return value.substring(10)
  }

  return value
}