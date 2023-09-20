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
  attendeeFirstName: z.string(),
  attendeeLastName: z.string(),
  attendeeEmail: z.string(),
  purchaserFirstName: z.string(),
  purchaserLastName: z.string(),
  purchaserEmail: z.string(),
  purchaserTelephone: z.string(),
})

export type Ticket = z.infer<typeof ticketSchema>

export const eventMagicTicketSchema = z.object({
  eventMagicTickets: ticketSchema.array(),
})

export type EventMagicTicket = z.infer<typeof eventMagicTicketSchema>
