import { buttonVariants } from "@/components/ui/button"

import type { SocialLink } from "../_lib/types"
import { SocialIcon } from "./social-icon"

export function SocialLinks({ socials }: { socials: SocialLink[] }) {
  return (
    <ul className="flex items-center justify-center gap-2.5">
      {socials.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            aria-label={social.label}
            className={buttonVariants({ size: "icon" })}
          >
            <SocialIcon platform={social.platform} className="size-4.5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
