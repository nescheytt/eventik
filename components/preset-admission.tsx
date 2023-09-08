import type { Ticket } from '@/types/ticket'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import formatVariationName from '@/utils/formatVariationName'
import formatCurrency from '@/utils/formatCurrency'
import formatNumber from '@/utils/formatNumber'

type Tickets = Ticket & {
  ticket_Count: number
}

type Preset = {
  count: string;
  status: string,
  percentage: number
  tickets: Tickets[]
}

export default function PresetAdmission({ count, status, percentage, tickets } : Preset) {
  const totalCount = tickets.reduce((acc, { ticket_Count }) => {
    const count = ticket_Count
    return acc + count;
  }, 0);

  const totalPrice = tickets.reduce((acc, { ticket_Price }) => {
    const price = parseInt(ticket_Price)
    return acc + price;
  }, 0);

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
          <TableHeader>
            <TableRow>
              <TableHead className="pl-0">Tipo de entrada</TableHead>
              <TableHead className="w-[50px]">Cant.</TableHead>
              <TableHead className="pr-0 w-[120px] text-right">Monto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => {
              const { variation_Name, ticket_Count, ticket_Price } = ticket

              return (
                <TableRow key={variation_Name} className="border-0">
                  <TableCell className="pl-0">{formatVariationName(variation_Name)}</TableCell>
                  <TableCell className="text-right text-primary">{formatNumber(ticket_Count)}</TableCell>
                  <TableCell className="pr-0 text-right font-bold">{formatCurrency(parseInt(ticket_Price))}</TableCell>
                </TableRow>
              )
            })}

            <TableRow>
              <TableCell className="pl-0 pt-5">Total</TableCell>
              <TableCell className="text-right text-primary">{formatNumber(totalCount)}</TableCell>
              <TableCell className="pr-0 text-right font-bold">{formatCurrency(totalPrice)}</TableCell>
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