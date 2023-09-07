export default function queryIdTranslate(id: string): string | undefined {
  if (typeof id !== 'string') {
    throw new Error("El valor debe ser un string");
  }

  // basics ids
  if (id === 'order_Date') return 'Fecha';
  if (id === 'order_ID') return 'Pedido';
  if (id === 'order_Status') return 'Estado';
  if (id === 'product_Name') return 'Producto';
  if (id === 'variation_Name') return 'Tipo de entrada';
  if (id === 'ticket_ID') return 'Entrada';
  if (id === 'ticket_Number') return 'Número de entrada';
  if (id === 'ticket_Price') return 'Precio de entrada';
  if (id === 'admission_Status') return '¿Admitido?';
  // assistant ids
  if (id === 'attendee') return 'Asistente';
  if (id === 'attendee_Name') return 'Nombre asistente';
  if (id === 'attendee_LastName') return 'Apellido asistente';
  if (id === 'attendee_Email') return 'Email asistente';
  if (id === 'attendee_Telephone') return 'Teléfono asistente';
  // payer ids
  if (id === 'purchaser') return 'Pagador';
  if (id === 'purchaser_FirstName') return 'Nombre pagador';
  if (id === 'purchaser_LastName') return 'Apellido pagador';
  if (id === 'purchaser_Email') return 'Email pagador';
  if (id === 'purchaser_Phone') return 'Teléfono pagador';
  // extras ids
  if (id === 'created_Manually') return 'Creado manualmente';
  if (id === 'payment_Method') return 'Método de pago';
  if (id === 'payment_Type') return 'Tipo de pago';

  return undefined;
};