import type { StartPageData, StartPageResult } from "./types"

// Datos estáticos de diseño. Reemplazar por la consulta a Supabase
// (envuelta en React.cache) manteniendo el contrato StartPageResult.
const START_PAGE_DATA: StartPageData = {
  profile: {
    displayName: "Sebastian Diaz",
    bio: "Comparto lo que me funciona para tener más libre en mi negocio",
    avatarUrl: "/start/avatar.webp",
    verified: true,
  },
  socials: [
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/soysebastiandiaz_" },
    { platform: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@soysebastiandiaz" },
    { platform: "email", label: "Email", href: "mailto:sebasw3b@gmail.com" },
  ],
  links: [
    {
      id: "link-1",
      title: "Título del link 1",
      description: "Descripción corta",
      href: "#",
    },
    {
      id: "link-2",
      title: "Título del link 2",
      description: "Descripción corta",
      href: "#",
    },
    {
      id: "link-3",
      title: "Título del link 3",
      description: "Descripción corta",
      href: "#",
    },
    {
      id: "link-4",
      title: "Título del link 4",
      description: "Descripción corta",
      href: "#",
    },
  ],
}

export async function getStartPageData(): Promise<StartPageResult> {
  return { ok: true, data: START_PAGE_DATA }
}
