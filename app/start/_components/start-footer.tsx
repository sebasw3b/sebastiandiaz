import type { StartFooter as StartFooterData } from "../_lib/types"

export function StartFooter({ footer }: { footer: StartFooterData }) {
  return (
    <footer className="flex flex-col items-center gap-1 text-center text-xs text-muted-foreground">
      <p>{footer.text}</p>
      <p>{footer.legal}</p>
    </footer>
  )
}
