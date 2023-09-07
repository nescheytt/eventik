import { Button } from '@/components/ui/button'
import { ButtonCopy } from '@/components/ui/button-copy'

export default function HeroTitle() {
  return (
    <div className='flex items-center justify-between space-y-2'>
      <h2 className='text-2xl font-bold tracking-tight'>{process.env.NEXT_PUBLIC_EVENT_NAME}</h2>

      <div className='flex items-center space-x-2'>
        <ButtonCopy url={process.env.NEXT_PUBLIC_EVENT_URL!} />
        <Button variant="outline">Visitar</Button>
      </div>
    </div>
  )
}