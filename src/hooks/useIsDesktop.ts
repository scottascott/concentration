import { useEffect, useState } from "react";

/** Matches Tailwind's default `sm` breakpoint (640px). */
const QUERY = "(min-width: 640px)";

/**
 * Returns null until the viewport is known (avoids mounting both
 * desktop/mobile variants during SSR/hydration), then true/false.
 */
export default function useIsDesktop(): boolean | null {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    setIsDesktop(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}
