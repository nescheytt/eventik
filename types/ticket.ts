export interface EventMagicTicket {
  eventMagicTickets:   Ticket[]
}

export interface Ticket {
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
  attendeeFirstName:   string
  attendeeLastName:    string
  attendeeEmail:       string
  purchaserFirstName:  string
  purchaserLastName:   string
  purchaserEmail:      string
  purchaserTelephone:  string
}

