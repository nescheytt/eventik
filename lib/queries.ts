import type { GetTickets } from "@/types/ticket"
import { gql, TypedDocumentNode } from "@apollo/client"

export const GET_TICKETS: TypedDocumentNode<GetTickets> = gql`
  query GetTickets($product_id: Int) {
    eventMagicTickets(product_id: $product_id) {
      orderID
      orderStatus
      ticketPostDate
      ticketNumber
      ticketStatus
      ticketID
      ticketName
      ticketHash
      ticketPrice
      orderAdminAddTicket
      attendeeFirstName
      attendeeLastName
      attendeeEmail
      purchaserFirstName
      purchaserLastName
      purchaserEmail
      purchaserTelephone
    }

    eventTicketSales(product_id: $product_id) {
      variationName
      totalRevenue
      totalVariationsSold
    }
  }
`
