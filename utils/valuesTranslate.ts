export function orderStatusTranslate(value: string): string {
  if (value === 'wc-completed') return 'Completa';
  if (value === 'wc-pending') return 'Pendiente';
  return value;
};

export function admissionStatusTranslate(value: string): string {
  if (value === 'Not Checked In') return 'Pendiente';
  if (value === 'Checked In') return 'Ingresó';
  return value;
};