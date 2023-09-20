import type { GetSalesData } from "@/utils/getSalesData"
import Link from "next/link"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

export default function PresetSales({ data }: { data: GetSalesData }) {
  const {
    variations,
    totalData: { totalCount, totalPrice },
  } = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 md:p-6 md:pb-2">
            <CardTitle className="text-sm font-medium">Ventas</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
            <span className="text-2xl font-semibold">{totalPrice}</span>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="min-h-screen py-16 sm:min-h-max sm:max-w-[475px] sm:py-6">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-lg">Ventas</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-0">Tipo de entrada</TableHead>
              <TableHead className="w-[50px]">Cant.</TableHead>
              <TableHead className="w-[120px] pr-0 text-right">Monto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {variations.map((ticket) => {
              const { ticketName, ticketCount, ticketPrice } = ticket

              return (
                <TableRow key={ticketName} className="border-0">
                  <TableCell className="pl-0">{ticketName}</TableCell>
                  <TableCell className="text-right text-primary">
                    {ticketCount}
                  </TableCell>
                  <TableCell className="pr-0 text-right font-bold">
                    {ticketPrice}
                  </TableCell>
                </TableRow>
              )
            })}

            <TableRow>
              <TableCell className="pl-0 pt-5">Total</TableCell>
              <TableCell className="pt-5 text-right">
                <p className="text-primary">{totalCount}</p>
              </TableCell>
              <TableCell className="pr-0 pt-5 text-right">
                <p className="font-bold">{totalPrice}</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <DialogFooter>
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground">
              Estos montos no están considerados los descuentos que MercadoPago
              realizará, por ejemplo su comisión por procesamiento del pago,
              Ingresos Brutos, y/o Retenciones.
            </p>
            <Link href="/" className="text-sm text-red-600">
              Conocer más.
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
