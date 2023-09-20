import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { DropdownMenuNav } from "@/components/dropdown-menu-nav"

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <div className="relative flex w-full items-center justify-between 2xl:container 2xl:px-4">
        <UserNav />
        <MainNav />
      </div>

      <DropdownMenuNav />
    </header>
  )
}
