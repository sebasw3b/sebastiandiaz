import type { StartPageData, StartPageResult } from "./types"

// Datos estáticos de diseño. Reemplazar por la consulta a Supabase
// (envuelta en React.cache) manteniendo el contrato StartPageResult.
const START_PAGE_DATA: StartPageData = {
  profile: {
    displayName: "Nombre visible",
    category: "Título / categoría",
    bio: "Bio corta: una o dos líneas sobre quién sos y qué vas a encontrar en estos links.",
    verified: true,
  },
  socials: [
    { platform: "instagram", label: "Instagram", href: "#" },
    { platform: "tiktok", label: "TikTok", href: "#" },
    { platform: "youtube", label: "YouTube", href: "#" },
    { platform: "email", label: "Email", href: "#" },
  ],
  links: [
    {
      id: "featured",
      title: "Título del link destacado",
      description: "Descripción corta",
      href: "#",
      featured: true,
    },
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
  footer: {
    text: "Texto del pie",
    legal: "Legal / copyright",
  },
}

export async function getStartPageData(): Promise<StartPageResult> {
  return { ok: true, data: START_PAGE_DATA }
}
