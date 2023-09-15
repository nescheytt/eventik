import { QueryID } from '@/types/query-id'

export default function setTranslateQueryId(id: string): string | undefined {
  if (typeof id !== 'string') {
    throw new Error("El valor debe ser un string");
  }

  // basics ids
  if (id === QueryID.TICKET_POST_DATE) return 'Fecha';
  if (id === QueryID.ORDER_ID) return 'Pedido';
  if (id === QueryID.ORDER_STATUS) return 'Estado';
  if (id === QueryID.PRODUCT_NAME) return 'Producto';
  if (id === QueryID.TICKET_NAME) return 'Tipo de entrada';
  if (id === QueryID.TICKET_ID) return 'Entrada';
  if (id === QueryID.TICKET_NUMBER) return 'Número de entrada';
  if (id === QueryID.TICKET_PRICE) return 'Precio de entrada';
  if (id === QueryID.TICKET_STATUS) return '¿Admitido?';
  // assistant ids
  if (id === QueryID.ATTENDEE) return 'Asistente';
  if (id === QueryID.ATTENDEE_FIRST_NAME) return 'Nombre asistente';
  if (id === QueryID.ATTENDEE_LAST_NAME) return 'Apellido asistente';
  if (id === QueryID.ATTENDEE_EMAIL) return 'Email asistente';
  if (id === QueryID.ATTENDEE_PHONE) return 'Teléfono asistente';
  // payer ids
  if (id === QueryID.PURCHASER) return 'Pagador';
  if (id === QueryID.PURCHASER_FIRST_NAME) return 'Nombre pagador';
  if (id === QueryID.PURCHASER_LAST_NAME) return 'Apellido pagador';
  if (id === QueryID.PURCHASER_EMAIL) return 'Email pagador';
  if (id === QueryID.PURCHASER_PHONE) return 'Teléfono pagador';
  // extras ids
  if (id === QueryID.CREATED_MANUALLY) return 'Creado manualmente';
  if (id === QueryID.PAYMENT_METHOD) return 'Método de pago';
  if (id === QueryID.PAYMENT_TYPE) return 'Tipo de pago';

  return undefined;
};