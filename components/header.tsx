import { UserNav } from '@/components/user-nav'
import { MainNav } from '@/components/main-nav'
import { DropdownMenuNav } from '@/components/dropdown-menu-nav'
import { ToggleMode } from '@/components/toggle-mode'

export default function Header() {
  return (
    <header className='w-full p-4 border-b flex items-center justify-between relative'>
      <UserNav />
      <div className="flex items-center gap-4">
        <MainNav />
        <ToggleMode />
      </div>
      <DropdownMenuNav />
    </header>
  )
}