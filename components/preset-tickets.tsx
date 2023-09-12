import {
  Dialog,
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

      <DialogContent className='max-w-none min-h-screen lg:max-w-[475px] lg:min-h-fit'>
        <DialogHeader>
          <DialogTitle>Entradas</DialogTitle>
        </DialogHeader>

        <Table>
          <TableBody>
            {tickets.map((ticket) => {
              const { variation_Name, totalRemain, totalCompletedWithChecked, totalTickets } = ticket
              const soldOut = totalRemain <= 0

              return (
                <TableRow key={variation_Name}>
                  <TableCell className="px-0 text-primary">{variation_Name}</TableCell>
                  <TableCell className='pr-0 flex items-center justify-end'>
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