import Link from 'next/link'
import { ButtonCopy } from '@/components/ui/button-copy'
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons'

export default function HeroTitle() {
  return (
    <section className='flex lg:flex-row items-center lg:justify-between'>
      <h2 className='text-xl md:text-2xl font-bold tracking-tight'>{process.env.NEXT_PUBLIC_EVENT_NAME}</h2>

      <div className='hidden lg:flex items-center gap-x-2'>
        <ButtonCopy variant='secondary' className='gap-1' url={process.env.NEXT_PUBLIC_EVENT_URL!}>
          <CopyIcon />
        </ButtonCopy>

        <Link
          href={process.env.NEXT_PUBLIC_EVENT_URL!}
          className="h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80"
          target='_blank'
        >
          <ExternalLinkIcon />
          <span>Visitar</span>
        </Link>
      </div>
    </section>
  )
}