import { Button } from '@/components/ui/button'
import { ButtonCopy } from '@/components/ui/button-copy'
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons'

export default function HeroTitle() {
  return (
    <section className='flex items-center justify-between'>
      <h2 className='text-2xl font-bold tracking-tight'>{process.env.NEXT_PUBLIC_EVENT_NAME}</h2>

      <div className='flex items-center gap-x-2'>
        <ButtonCopy variant='secondary' className='gap-1' url={process.env.NEXT_PUBLIC_EVENT_URL!}>
          <CopyIcon />
        </ButtonCopy>

        <Button variant='secondary' className='gap-1'>
          <ExternalLinkIcon />
          <span>Visitar</span>
        </Button>
      </div>
    </section>
  )
}