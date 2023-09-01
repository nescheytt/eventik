import { gql } from '@apollo/client';

export const GET_TICKETS = gql`
query GetTickets($product_id: Int) {
  eventMagicTickets(product_id: $product_id) {
    order_Date
    order_ID
    order_Status
    product_Name
    variation_Name
    ticket_ID
    ticket_Number
    ticket_Price
    admission_Status
    attendee_Name
    attendee_LastName
    attendee_Email
    attendee_Telephone
    purchaser_FirstName
    purchaser_LastName
    purchaser_Email
    purchaser_Phone
    created_Manually
    payment_Method
    payment_Type
  }
}
`;
