import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("hidden lg:flex items-center justify-center space-x-4", className)} {...props}>
      <Link
        href={process.env.NEXT_PUBLIC_GUIDES_LINK_URL!}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Guias
      </Link>
      <Link
        href={process.env.NEXT_PUBLIC_HELP_LINK_URL!}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Ayuda
      </Link>
    </nav>
  )
}
