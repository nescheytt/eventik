import { UserNav } from '@/components/user-nav'
import { MainNav } from '@/components/main-nav'
import { DropdownMenuNav } from '@/components/dropdown-menu-nav'

export default function Header() {
  return (
    <header className='border-b'>
      <div className="container w-full py-4 flex items-center justify-between relative">
        <UserNav />
        <MainNav />
      </div>
      <DropdownMenuNav />
    </header>
  )
}