import Image from "next/image"
import { ChevronRight, Image as ImageIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { cn } from "@/lib/utils"

import type { StartLink } from "../_lib/types"

export function LinkCard({ link }: { link: StartLink }) {
  const { title, description, href, featured, thumbnailUrl } = link

  return (
    <Item
      variant={featured ? "muted" : "outline"}
      size={featured ? "default" : "sm"}
      render={<a href={href} />}
    >
      <ItemMedia
        variant="image"
        className="grid place-items-center border bg-background text-muted-foreground"
      >
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt="" width={40} height={40} />
        ) : (
          <ImageIcon aria-hidden className="size-4" />
        )}
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRight
          aria-hidden
          className={cn(
            "size-4",
            featured ? "text-brand" : "text-muted-foreground"
          )}
        />
      </ItemActions>
    </Item>
  )
}
