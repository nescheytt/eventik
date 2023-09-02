import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  return (
    <div className="md:flex">
      <Avatar className="h-12 w-12 mr-3">
        <AvatarImage src="/avatars/ttl.jpg" alt="TOMATULUGAR" />
        <AvatarFallback>TL</AvatarFallback>
      </Avatar>
      <span className="font-semibold flex items-center">TOMATULUGAR</span>
    </div>
  )
}
