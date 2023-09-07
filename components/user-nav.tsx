import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  return (
    <div className="md:flex">
      <Avatar className="h-12 w-12 mr-3">
        <AvatarImage src={process.env.NEXT_PUBLIC_ORGANIZER_IMAGE_URL} alt={process.env.NEXT_PUBLIC_ORGANIZER_NAME} />
        <AvatarFallback>TL</AvatarFallback>
      </Avatar>
      <span className="font-semibold flex items-center">{process.env.NEXT_PUBLIC_ORGANIZER_NAME}</span>
    </div>
  )
}
