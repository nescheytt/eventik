import { UserNav } from '@/components/user-nav'
import { MainNav } from '@/components/main-nav'
import { DropdownMenuNav } from '@/components/dropdown-menu-nav'

export default function Header() {
  return (
    <header className='w-full p-4 border-b flex items-center justify-between relative'>
      <UserNav />
      <MainNav />
      <DropdownMenuNav />
    </header>
  )
}