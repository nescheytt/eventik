export function orderStatusTranslate(value: string): string | undefined {
  if (value === 'wc-completed') return 'Completa';
  if (value === 'wc-pending') return 'Pendiente';
  return undefined;
};

export function admissionStatusTranslate(value: string): string | undefined {
  if (value === 'Not Checked In') return 'Pendiente';
  if (value === 'Checked In') return 'Ingresó';
  return undefined;
};