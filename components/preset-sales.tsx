import type { GetSalesData } from '@/utils/getSalesData'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell } from '@/components/ui/table'

export default function PresetSales({ data } : { data: GetSalesData }) {
  const { variations, totalData: { totalCount, totalPrice }  } = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='cursor-pointer'> 
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Ventas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-semibold'>
              {totalPrice}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px]'>
        <DialogHeader>
          <DialogTitle>Ventas</DialogTitle>
        </DialogHeader>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-0">Tipo de entrada</TableHead>
              <TableHead className="w-[50px]">Cant.</TableHead>
              <TableHead className="pr-0 w-[120px] text-right">Monto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {variations.map((ticket) => {
              const { variation_Name, ticketCount, ticketPrice } = ticket

              return (
                <TableRow key={variation_Name} className="border-0">
                  <TableCell className="pl-0">{variation_Name}</TableCell>
                  <TableCell className="text-right text-primary">{ticketCount}</TableCell>
                  <TableCell className="pr-0 text-right font-bold">{ticketPrice}</TableCell>
                </TableRow>
              )
            })}

            <TableRow>
              <TableCell className="pl-0 pt-5">Total</TableCell>
              <TableCell className="text-right text-primary">{totalCount}</TableCell>
              <TableCell className="pr-0 text-right font-bold">{totalPrice}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <DialogFooter>
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm">
              Estos montos no están considerados los descuentos que MercadoPago realizará, por ejemplo su comisión por procesamiento del pago, Ingresos Brutos, y/o Retenciones.
            </p>
            <Link href="/" className="text-red-600 text-sm">Conocer más.</Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}