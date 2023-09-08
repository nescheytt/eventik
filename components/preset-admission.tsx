import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Ticket } from '@/types/ticket'
import { count } from 'console'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function PresetAdmission({
  children,
  count,
  status,
  percentage,
  tickets
} : { children?: React.ReactNode, count: string, status: string, percentage: number, tickets: Ticket[] }) {
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
            <div className='text-2xl font-semibold'>{count}
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
        <div className='grid gap-4 py-4'>
          <div className='grid gap-2'>
            <label htmlFor='name'>Name</label>
            <input id='name' autoFocus />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='description'>Description</label>
            <input id='description' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}