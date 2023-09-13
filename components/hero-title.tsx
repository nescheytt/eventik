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
          className="h-10 px-4 py-2 flex items-center justify-center gap-x-1 bg-secondary rounded-md text-sm font-medium"
          target='_blank'
        >
          <ExternalLinkIcon />
          <span>Visitar</span>
        </Link>
      </div>
    </section>
  )
}