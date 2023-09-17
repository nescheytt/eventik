import { orderStatusTranslate } from './setTranslateValues'
import { formattedTicketName } from './setFormatValues'
import { Ticket } from '@/types/ticket'

interface GetFilterOptionsProps<TData> {
  data: any[]
}

type Options = {
  label: string
  value: string
}

export default function getFilterOptions<TData>({
  data
} : GetFilterOptionsProps<TData>) {
  
  const uniqueProductNames: string[] = [...new Set(data?.map((ticket: Ticket) => ticket.orderStatus))];
  const uniqueTicketNames: string[] = [...new Set(data?.map((ticket: Ticket) => ticket.ticketName))];

  const optionsStatus: Options[] = uniqueProductNames.map((name: string) => ({
    label: orderStatusTranslate(name),
    value: name
  }));

  const optionsTickets: Options[] = uniqueTicketNames.map((name: string) => ({
    label: formattedTicketName(name),
    value: name
  }));

  return {
    optionsStatus,
    optionsTickets
  }
}