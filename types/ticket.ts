import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const ticketSchema = z.object({
  orderID: z.string(),
  orderStatus: z.string(),
  ticketID: z.string(),
  ticketHash: z.string(),
  ticketName: z.string(),
  ticketNumber: z.number(),
  ticketPrice: z.string(),
  ticketPostDate: z.string(),
  ticketStatus: z.string(),
  orderAdminAddTicket: z.string(),
  usedCoupon: z.string(),
  attendeeFirstName: z.string(),
  attendeeLastName: z.string(),
  attendeeEmail: z.string(),
  purchaserFirstName: z.string(),
  purchaserLastName: z.string(),
  purchaserEmail: z.string(),
  purchaserTelephone: z.string(),
})

export const ticketSalesSchema = z.object({
  variationName: z.string(),
  totalRevenue: z.string(),
  totalVariationsSold: z.string(),
})

export type Ticket = z.infer<typeof ticketSchema>
export type TicketSales = z.infer<typeof ticketSalesSchema>

export const getTicketsSchema = z.object({
  eventMagicTickets: ticketSchema.array(),
  eventTicketSales: ticketSalesSchema.array(),
})

export type GetTickets = z.infer<typeof getTicketsSchema>
