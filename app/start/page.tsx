import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LinkList } from "./_components/link-list"
import { ProfileHeader } from "./_components/profile-header"
import { reveal } from "./_components/reveal"
import { getStartPageData } from "./_lib/start-data"

export const metadata: Metadata = {
  title: "Links",
  description: "Todos mis links en un solo lugar.",
}

export default async function StartPage() {
  const result = await getStartPageData()
  if (!result.ok) notFound()

  const { profile, socials, links } = result.data
  const headerMotion = reveal(0)

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-4 py-6 sm:py-12">
      <div className={headerMotion.className} style={headerMotion.style}>
        <ProfileHeader profile={profile} socials={socials} />
      </div>

      <nav aria-label="Links">
        <LinkList links={links} revealOffset={1} />
      </nav>
    </main>
  )
}
