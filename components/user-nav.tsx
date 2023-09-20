import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  return (
    <figure className="flex">
      <Avatar className="mr-3 h-12 w-12">
        <AvatarImage
          src={process.env.NEXT_PUBLIC_ORGANIZER_IMAGE_URL}
          alt={process.env.NEXT_PUBLIC_ORGANIZER_NAME}
        />
        <AvatarFallback>TL</AvatarFallback>
      </Avatar>
      <figcaption className="flex items-center font-semibold">
        {process.env.NEXT_PUBLIC_ORGANIZER_NAME}
      </figcaption>
    </figure>
  )
}
