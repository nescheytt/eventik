import { gql, TypedDocumentNode } from '@apollo/client'
import type { TicketNew } from '@/types/ticket'

export const GET_TICKETS_NEW: TypedDocumentNode<TicketNew> = gql`
query GetTickets($product_id: Int) {
  eventMagicTickets(product_id: $product_id) {
    orderID,
    ticketPostDate,
    ticketNumber,
    ticketStatus,
    ticketID,
    ticketName,
    ticketHash,
    orderAdminAddTicket,
    attendeeName,
    attendeeLastName,
    attendeeEmail,
    purchaserFirstName,
    purchaserLastName,
    purchaserEmail,
    purchaserTelephone
  }
}
`
