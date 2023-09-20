import type { GetAdmissionsData } from "@/utils/getAdmissionsData"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formattedTicketName } from "@/utils/setFormatValues"

export default function PresetAdmission({ data }: { data: GetAdmissionsData }) {
  const {
    admissions,
    totalData: {
      totalPercentageAdmission,
      totalAdmission,
      totalCurrentAdmission,
    },
  } = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 md:p-6 md:pb-2">
            <CardTitle className="text-sm font-medium">Admisión</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
            <div className="flex items-center gap-x-2">
              <span className="text-2xl font-bold text-primary">
                {totalCurrentAdmission}
              </span>
              <span className="text-muted-foreground">de {totalAdmission}</span>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="min-h-screen py-16 sm:min-h-max sm:max-w-[475px] sm:py-6">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-lg">Admisiones</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Card className="h-fit shadow">
            <div className="flex">
              <div className="flex w-full items-center justify-center gap-x-2 p-6">
                <span className="text-3xl font-bold text-primary">
                  {totalPercentageAdmission}%
                </span>
                <span className="font-semibold text-muted-foreground">
                  Admitidos
                </span>
              </div>

              <div className="flex w-full items-center justify-center gap-x-1 border-l p-6">
                <span className="text-3xl font-bold text-primary">
                  {totalCurrentAdmission}
                </span>
                <span className='font-semibold text-muted-foreground before:mx-1 before:content-["/"]'>
                  {totalAdmission}
                </span>
              </div>
            </div>
          </Card>

          <Table>
            <TableBody>
              {admissions.map((admission) => {
                const {
                  ticketName,
                  percentageForTicketName,
                  totalCompletedWithChecked,
                  totalCompletedWithNotChecked,
                } = admission

                return (
                  <TableRow key={ticketName}>
                    <TableCell className="px-0 text-primary">
                      {formattedTicketName(ticketName)}
                    </TableCell>
                    <TableCell className="flex items-center justify-end pr-0">
                      <Badge variant="outline" className="rounded-md px-2">
                        <span className="text-xs font-semibold">
                          {percentageForTicketName}%
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell className="pr-0">
                      <div className="text-right">
                        <span className="font-semibold text-primary">
                          {totalCompletedWithChecked}
                        </span>
                        <span className='text-muted-foreground before:mx-1 before:content-["/"]'>
                          {totalCompletedWithNotChecked}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}
