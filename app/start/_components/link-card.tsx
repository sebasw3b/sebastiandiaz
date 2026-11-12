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

import type { StartLink } from "../_lib/types"

export function LinkCard({ link }: { link: StartLink }) {
  const { title, description, href, thumbnailUrl } = link

  return (
    <Item variant="outline" size="sm" render={<a href={href} />}>
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
        <ChevronRight aria-hidden className="size-4 text-muted-foreground" />
      </ItemActions>
    </Item>
  )
}
