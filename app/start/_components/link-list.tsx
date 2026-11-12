import { ItemGroup } from "@/components/ui/item"

import type { StartLink } from "../_lib/types"
import { LinkCard } from "./link-card"
import { reveal } from "./reveal"

export function LinkList({
  links,
  revealOffset = 0,
}: {
  links: StartLink[]
  revealOffset?: number
}) {
  return (
    <ItemGroup className="gap-2.5">
      {links.map((link, index) => {
        const motion = reveal(revealOffset + index)
        return (
          <div
            key={link.id}
            role="listitem"
            className={motion.className}
            style={motion.style}
          >
            <LinkCard link={link} />
          </div>
        )
      })}
    </ItemGroup>
  )
}
