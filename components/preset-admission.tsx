import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableRow, TableBody, TableCell } from '@/components/ui/table'
import formatVariationName from '@/utils/formatVariationName'

type Tickets = {
  variation_Name: string
  totalCompletedWithChecked: number
  totalCompletedWithNotChecked: number
  percentage: number
}

type Preset = {
  count: string
  status: string
  percentage: number
  tickets: Tickets[]
}

export default function PresetAdmission({ count, status, percentage, tickets } : Preset) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='cursor-pointer'> 
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              {status}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-semibold'>
              {count}
              <span className='text-sm ml-2 text-muted-foreground'>
                {percentage ? `${percentage.toFixed(2)}% of total` : ''}
              </span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px]'>
        <DialogHeader>
          <DialogTitle>{status}</DialogTitle>
        </DialogHeader>

        <Table>
          <TableBody>
            {tickets.map((ticket) => {
              const { variation_Name, totalCompletedWithChecked, totalCompletedWithNotChecked, percentage } = ticket
              
              return (
                <TableRow key={variation_Name}>
                  <TableCell className="px-0 text-primary">{formatVariationName(variation_Name)}</TableCell>
                  <TableCell className='pr-0 flex items-center justify-end'>
                    <div className='px-2 w-fit border rounded-md'>
                      <span className="font-bold text-xs">{percentage}%</span> 
                    </div>
                  </TableCell>
                  <TableCell className="pr-0">
                    <div className="text-right">
                      <span className='text-primary font-bold'>{totalCompletedWithChecked}</span>
                      <span className='text-muted-foreground before:content-["/"] before:mx-1'>{totalCompletedWithNotChecked}</span>
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