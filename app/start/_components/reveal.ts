import type { CSSProperties } from "react"

const REVEAL_STEP_MS = 70

/** Único reveal escalonado de la página; se desactiva con reduced motion. */
export function reveal(step: number): {
  className: string
  style: CSSProperties
} {
  return {
    className:
      "animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out fill-mode-backwards motion-reduce:animate-none",
    style: { animationDelay: `${step * REVEAL_STEP_MS}ms` },
  }
}
