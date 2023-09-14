export type Ticket = {
  eventMagicTickets:    never[]
  order_Date:           string
  order_ID:             string
  order_Status:         string
  product_name:         string
  variation_Name:       string
  ticket_ID:            string
  ticket_Number:        string
  ticket_Price:         string
  admission_Status:     string
  attendee_Name:        string
  attendee_LastName:    string
  attendee_Email:       string
  attendee_Telephone:   string
  purchaser_FirstName:  string
  purchaser_LastName:   string
  purchaser_Email:      string
  purchaser_Phone:      string
  created_Manually:     string
  payment_Method:       string
  payment_Type:         string
}

export interface EventMagicTicket {
  eventMagicTickets:   TicketNew[]
}

export interface TicketNew {
  orderID:             string
  orderStatus:         string
  ticketPostDate:      null
  ticketNumber:        number
  ticketStatus:        string
  ticketID:            string
  ticketName:          string
  ticketHash:          string
  ticketPrice:         string
  orderAdminAddTicket: null
  attendeeName:        string
  attendeeLastName:    string
  attendeeEmail:       string
  purchaserFirstName:  string
  purchaserLastName:   string
  purchaserEmail:      string
  purchaserTelephone:  string
}

