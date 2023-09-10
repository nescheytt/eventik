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
import { formattedVariationName } from '@/utils/setFormatValues'

export default function PresetTickets({ data } : { data: GetTicketsData }) {
  const { tickets, totalData: { totalCompleted } } = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='cursor-pointer'> 
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Entradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-x-2">
              <span className='text-2xl font-semibold'>{totalCompleted}</span>
              <span className='text-muted-foreground'>de {process.env.NEXT_PUBLIC_EVENT_TOTAL_TICKETS}</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px]'>
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
                  <TableCell className="px-0 text-primary">{formattedVariationName(variation_Name)}</TableCell>
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