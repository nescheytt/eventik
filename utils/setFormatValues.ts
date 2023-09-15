
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
 * El valor se formatea el string
 * @param value 
 */
export function formattedTicketName(value: string): string {
  // Utilizamos una expresión regular que busca 'attribute_entradas' seguido de ';' y luego el texto entre comillas dobles.
  const regex = /"attribute_entradas";s:\d+:"(.*?)";/;
  const match = regex.exec(value);

  // Si se encontró una coincidencia y se extrajo el nombre, lo retornamos; de lo contrario, retornamos null.
  if (match && match[1]) {
    return match[1];
  }
  
  return value
}