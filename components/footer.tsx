import { ModeToggle } from '@/components/mode-toggle'

export function Footer() {
  return (
    <footer className="container px-4 py-6 flex items-center justify-between border-t">
      <p className="text-sm">© Eventik 2023</p>

      <ModeToggle />
    </footer>
  )
}