import { UserNav } from '@/components/user-nav'
import { MainNav } from '@/components/main-nav'
import { DropdownMenuNav } from '@/components/dropdown-menu-nav'

export function Header() {
  return (
    <header className='p-4 flex items-center justify-between border-b'>
      <div className="2xl:container 2xl:px-4 w-full flex items-center justify-between relative">
        <UserNav />
        <MainNav />
      </div>
      
      <DropdownMenuNav />
    </header>
  )
}