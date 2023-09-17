import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent } from '@/components/ui/card'
import {
  Table,
  TableRow,
  TableBody,
  TableCell } from '@/components/ui/table'
import { GetTicketsData } from '@/utils/getTicketsData'
import { Badge } from '@/components/ui/badge'

export default function PresetTickets({ data } : { data: GetTicketsData }) {
  const { tickets, totalData: { totalCompleted } } = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='cursor-pointer'> 
          <CardHeader className='p-4 md:p-6 pb-2 md:pb-2 flex flex-row items-center justify-between space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Entradas
            </CardTitle>
          </CardHeader>
          <CardContent className='p-4 md:p-6 pt-0 md:pt-0'>
            <div className="flex items-center gap-x-2">
              <span className='text-2xl font-semibold'>{totalCompleted}</span>
              <span className='text-muted-foreground'>de {process.env.NEXT_PUBLIC_EVENT_TOTAL_TICKETS}</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px] min-h-screen sm:min-h-max py-16 sm:py-6'>
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-lg">Entradas</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <Table>
          <TableBody>
            {tickets.map((ticket) => {
              const { ticketName, totalRemain, totalCompletedWithChecked, totalTickets } = ticket
              const soldOut = totalRemain <= 0

              return (
                <TableRow key={ticketName}>
                  <TableCell className="pl-0 max-w-[130px] lg:max-w-[180px] text-primary">
                    <span>{ticketName}</span>
                  </TableCell>

                  <TableCell className='text-right'>
                    <Badge variant={soldOut ? 'default' : 'outline'} className={`rounded-md px-2 ${soldOut && 'bg-orange-50 text-orange-700'}`}>
                      {soldOut ? 'Agotadas' : `Quedan ${totalRemain}`}
                    </Badge>
                  </TableCell>

                  <TableCell className="pr-0">
                    <div className="text-right">
                      <span className='text-primary font-semibold'>{totalCompletedWithChecked}</span>
                      <span className='text-muted-foreground before:content-["/"] before:mx-1'>{totalTickets}</span>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}