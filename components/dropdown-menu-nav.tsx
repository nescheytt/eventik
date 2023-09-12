import { CopyIcon, ExternalLinkIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { BookOpen, LifeBuoy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuNav() {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <CopyIcon className="mr-2 h-4 w-4" />
              <span>Copiar</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              <span>Visitar</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Guias</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Ayuda</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
