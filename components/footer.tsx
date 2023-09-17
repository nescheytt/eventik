import { ToggleMode } from '@/components/toggle-mode'

export default function Footer() {
  return (
    <footer className="container px-4 py-6 flex items-center justify-between border-t">
      <p className="text-sm">Eventik © 2023</p>

      <ToggleMode />
    </footer>
  )
}