import { MainNav } from '@/components/main-nav'
import { UserNav } from '@/components/user-nav'

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="mr-auto flex items-center space-x-4">
          <UserNav />
        </div>

        <MainNav className="mx-6" />
      </div>
    </header>
  )
}