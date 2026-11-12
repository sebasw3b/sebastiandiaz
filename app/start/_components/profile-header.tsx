import Image from "next/image"
import { BadgeCheck, Ellipsis, User } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { SocialLink, StartProfile } from "../_lib/types"
import { SocialLinks } from "./social-links"

export function ProfileHeader({
  profile,
  socials,
}: {
  profile: StartProfile
  socials: SocialLink[]
}) {
  return (
    <header className="overflow-hidden rounded-lg border bg-card text-card-foreground">
      <div className="relative h-32 bg-muted">
        {profile.coverUrl ? (
          <Image
            src={profile.coverUrl}
            alt=""
            fill
            priority
            sizes="(min-width: 28rem) 28rem, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(var(--input)_1px,transparent_1px)] bg-size-[14px_14px]"
          />
        )}
        <Button
          variant="outline"
          size="icon"
          aria-label="Más opciones"
          className="absolute top-3 right-3 rounded-full"
        >
          <Ellipsis />
        </Button>
      </div>

      <div className="flex flex-col items-center px-6 pb-7 text-center">
        <div className="relative -mt-12 grid size-24 place-items-center overflow-hidden rounded-full border-4 border-card bg-muted text-muted-foreground">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={`Foto de ${profile.displayName}`}
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          ) : (
            <User aria-hidden className="size-9" strokeWidth={1.5} />
          )}
        </div>

        <h1 className="mt-4 flex items-center gap-1.5 font-heading text-[1.75rem] leading-tight font-semibold tracking-tight">
          {profile.displayName}
          {profile.verified ? (
            <>
              <BadgeCheck aria-hidden className="size-6 shrink-0 text-brand" />
              <span className="sr-only">Cuenta verificada</span>
            </>
          ) : null}
        </h1>
        <p className="mt-1 text-[0.9375rem] text-foreground/80">
          {profile.category}
        </p>
        <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-pretty text-muted-foreground">
          {profile.bio}
        </p>

        <div className="mt-5">
          <SocialLinks socials={socials} />
        </div>
      </div>
    </header>
  )
}
