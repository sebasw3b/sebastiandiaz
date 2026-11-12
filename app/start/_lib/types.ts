export type SocialPlatform = "instagram" | "tiktok" | "youtube" | "email"

export type SocialLink = {
  platform: SocialPlatform
  /** Nombre accesible del link, p. ej. "Instagram". */
  label: string
  href: string
}

export type StartProfile = {
  displayName: string
  category?: string
  bio: string
  verified: boolean
  /** URL de la foto de perfil. Sin valor → placeholder. */
  avatarUrl?: string
  /** URL de la portada. Sin valor → placeholder. */
  coverUrl?: string
}

export type StartLink = {
  id: string
  title: string
  description: string
  href: string
  /** URL de la miniatura. Sin valor → placeholder. */
  thumbnailUrl?: string
}

/** Reservado para el formulario del diseño (aún sin implementar). */
export type StartForm = {
  title: string
  description: string
  placeholder: string
  submitLabel: string
}

export type StartPageData = {
  profile: StartProfile
  socials: SocialLink[]
  links: StartLink[]
  form?: StartForm
}

export type StartPageResult =
  { ok: true; data: StartPageData } | { ok: false; error: string }
