import type { GetAdmissionsData } from '@/utils/getAdmissionsData'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger } from '@/components/ui/dialog'
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
import { Badge } from '@/components/ui/badge'
import { formattedTicketName } from '@/utils/setFormatValues'

export default function PresetAdmission({ data } : { data: GetAdmissionsData }) {
  const {
    admissions,
    totalData: {
      totalPercentageAdmission,
      totalAdmission,
      totalCurrentAdmission
    }} = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='cursor-pointer'> 
          <CardHeader className='p-4 md:p-6 pb-2 md:pb-2 flex flex-row items-center justify-between space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Admisión
            </CardTitle>
          </CardHeader>
          <CardContent className='p-4 md:p-6 pt-0 md:pt-0'>
            <div className="flex items-center gap-x-2">
              <span className='text-2xl text-primary font-bold'>{totalCurrentAdmission}</span>
              <span className='text-muted-foreground'>de {totalAdmission}</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px] min-h-screen sm:min-h-max py-16 sm:py-6 items-center gap-0 sm:gap-4'>
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-lg">Admisiones</DialogTitle>
          <DialogClose />
        </DialogHeader>

          <div className="flex flex-col gap-4">
            <Card className='shadow h-fit'>
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

            {/* <div className="max-h-[300px] sm:max-h-none overflow-y-scroll"> */}
              <Table>
                <TableBody>
                  {admissions.map((admission) => {
                    const {
                      ticketName,
                      percentageForTicketName,
                      totalCompletedWithChecked,
                      totalCompletedWithNotChecked } = admission

                    return (
                      <TableRow key={ticketName}>
                        <TableCell className="px-0 text-primary">{formattedTicketName(ticketName)}</TableCell>
                        <TableCell className='pr-0 flex items-center justify-end'>
                          <Badge variant="outline" className="rounded-md px-2">
                            <span className="font-semibold text-xs">{percentageForTicketName}%</span> 
                          </Badge>
                        </TableCell>
                        <TableCell className="pr-0">
                          <div className="text-right">
                            <span className='text-primary font-semibold'>{totalCompletedWithChecked}</span>
                            <span className='text-muted-foreground before:content-["/"] before:mx-1'>{totalCompletedWithNotChecked}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            {/* </div> */}
          </div>
      </DialogContent>
    </Dialog>
  )
}