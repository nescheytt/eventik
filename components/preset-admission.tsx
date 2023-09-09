import type { GetAdmissionData } from '@/utils/getAdmissionData'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableRow, TableBody, TableCell } from '@/components/ui/table'
import formatVariationName from '@/utils/formatVariationName'

type Preset = {
  count: string
  status: string
  percentage: number
  tickets: GetAdmissionData
}

export default function PresetAdmission({ count, status, percentage, tickets } : Preset) {
  const {
    admissions,
    totalData: { totalPercentageAdmission, totalAdmission, totalCurrentAdmission }
  } = tickets

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
            <div className="flex items-center gap-x-2">
              <span className='text-2xl text-primary font-bold'>{totalCurrentAdmission}</span>
              <span className='text-muted-foreground'>de {totalAdmission}</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px]'>
        <DialogHeader>
          <DialogTitle>Admisiones</DialogTitle>
        </DialogHeader>

        <Card className='shadow'>
          <div className='flex'>
            <div className="w-full p-6 flex items-center justify-center gap-x-2">
              <span className='text-3xl text-primary font-bold'>{totalPercentageAdmission}%</span>
              <span className='text-muted-foreground font-semibold'>Admitidos</span>
            </div>

            <div className="w-full p-6 flex items-center justify-center gap-x-1 border-l">
              <span className='text-3xl text-primary font-bold'>{totalCurrentAdmission}</span>
              <span className='text-muted-foreground font-semibold before:content-["/"] before:mx-1'>{totalAdmission}</span>
            </div>
          </div>
        </Card>

        <Table>
          <TableBody>
            {admissions.map((admission) => {
              const { variation_Name, percentageForVariationName, totalCompletedWithChecked, totalCompletedWithNotChecked } = admission

              return (
                <TableRow key={variation_Name}>
                  <TableCell className="px-0 text-primary">{formatVariationName(variation_Name)}</TableCell>
                  <TableCell className='pr-0 flex items-center justify-end'>
                    <div className='px-2 w-fit border rounded-md'>
                      <span className="font-bold text-xs">{percentageForVariationName}%</span> 
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