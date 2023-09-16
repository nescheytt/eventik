export enum QueryID {
  eventMagicTickets,
  TICKET_POST_DATE =      'ticketPostDate', // ex order_Date
  ORDER_ID =              'orderID',
  ORDER_STATUS =          'orderStatus',
  PRODUCT_NAME =          'product_Name', // no se usa mas
  TICKET_NAME =           'ticketName', // ex variation_Name
  TICKET_ID =             'ticketID',
  TICKET_HASH =           'ticketHash',
  TICKET_NUMBER =         'ticketNumber',
  TICKET_PRICE =          'ticketPrice',
  TICKET_STATUS =         'ticketStatus',
  ATTENDEE =              'attendee',
  ATTENDEE_FIRST_NAME =   'attendeeFirstName',
  ATTENDEE_LAST_NAME =    'attendeeLastName',
  ATTENDEE_EMAIL =        'attendeeEmail',
  ATTENDEE_PHONE =        'attendee_Telephone', // no se usa mas
  PURCHASER =             'purchaser',
  PURCHASER_FIRST_NAME =  'purchaserFirstName',
  PURCHASER_LAST_NAME =   'purchaserLastName',
  PURCHASER_EMAIL =       'purchaserEmail',
  PURCHASER_PHONE =       'purchaserPhone',
  CREATED_MANUALLY =      'created_Manually', // no se usa mas
  PAYMENT_METHOD =        'payment_Method', // no se usa mas
  PAYMENT_TYPE =          'payment_Type', // no se usa mas
}