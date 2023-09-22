"use client"

import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { CopyIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { ButtonCopy } from "@/components/ui/button-copy"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type HeroTitleProps = {
  selectedProduct: number
  setSelectedProduct: Dispatch<SetStateAction<number>>
}

export function HeroTitle({
  selectedProduct,
  setSelectedProduct,
}: HeroTitleProps) {
  // TODO: Esta hardcodeado hasta que se defina como retornar multiple productos activos @joniko
  const hasMultiProducts = true

  return (
    <section className="flex items-center lg:flex-row lg:justify-between">
      <div>
        {hasMultiProducts ? (
          <Select
            onValueChange={(value) => setSelectedProduct(parseInt(value))}
          >
            <SelectTrigger className="w-fit text-xl font-bold tracking-tight md:text-2xl">
              <SelectValue
                defaultValue={selectedProduct}
                placeholder={process.env.NEXT_PUBLIC_EVENT_NAME!}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Eventos activos</SelectLabel>
                <SelectItem value="253">
                  {process.env.NEXT_PUBLIC_EVENT_NAME!}
                </SelectItem>
                <SelectItem value="254">Evento 2</SelectItem>
                <SelectItem value="255">Evento 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ) : (
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">
            {process.env.NEXT_PUBLIC_EVENT_NAME}
          </h2>
        )}
      </div>

      <div className="hidden items-center gap-x-2 lg:flex">
        <ButtonCopy
          variant="secondary"
          className="gap-1"
          url={process.env.NEXT_PUBLIC_EVENT_URL!}
        >
          <CopyIcon />
        </ButtonCopy>

        <Link
          href={process.env.NEXT_PUBLIC_EVENT_URL!}
          className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          target="_blank"
        >
          <ExternalLinkIcon />
          <span>Visitar</span>
        </Link>
      </div>
    </section>
  )
}
