import { siteFooter } from "@/config/site"

// `dark` fija la paleta oscura del footer también en modo claro.
export function SiteFooter() {
  return (
    <footer className="dark w-full bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-md flex-col gap-3 px-4 py-8 sm:max-w-3xl sm:px-6">
        <p className="text-2xl font-semibold tracking-tight">
          {siteFooter.name}
        </p>
        <p className="text-xs text-muted-foreground">{siteFooter.legal}</p>
      </div>
    </footer>
  )
}
