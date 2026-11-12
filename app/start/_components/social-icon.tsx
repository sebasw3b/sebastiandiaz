import { Mail } from "lucide-react"

import type { SocialPlatform } from "../_lib/types"

type IconProps = { className?: string }

// lucide-react v1 no incluye íconos de marcas: trazos propios con el mismo
// estilo (stroke 2, línea redondeada, viewBox 24).
const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.2 4.5 5 4.8" />
    </svg>
  )
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9.5 4.5 2.5-4.5 2.5z" />
    </svg>
  )
}

export function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform
  className?: string
}) {
  switch (platform) {
    case "instagram":
      return <InstagramIcon className={className} />
    case "tiktok":
      return <TikTokIcon className={className} />
    case "youtube":
      return <YouTubeIcon className={className} />
    case "email":
      return <Mail aria-hidden className={className} />
  }
}
