export function orderStatusTranslate(value: string): string {
  if (value === 'wc-completed') return 'Completa';
  if (value === 'wc-refunded') return 'Devuelta';
  return value;
};

export function admissionStatusTranslate(value: string): string {
  if (value === 'Not Checked In') return 'Pendiente';
  if (value === 'Checked In') return 'Ingresó';
  if (value === 'Canceled') return 'Cancelado';
  return value;
};