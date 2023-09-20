import { ModeToggle } from "@/components/mode-toggle"

export function Footer() {
  return (
    <footer className="container flex items-center justify-between border-t px-4 py-6">
      <p className="text-sm">© Eventik 2023</p>

      <ModeToggle />
    </footer>
  )
}
