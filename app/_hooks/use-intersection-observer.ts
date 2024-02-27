import React, { useEffect } from "react"

export interface UseIntersectionObserverProps {
  root: React.RefObject<any> | null
  target: React.MutableRefObject<any>
  onIntersect: () => void
  onNotIntersect?: () => void
  threshold?: number
  rootMargin?: string
  enabled?: boolean
}

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  onNotIntersect,
  threshold = 0.5,
  rootMargin = "0px",
  enabled = true,
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect()
          } else {
            onNotIntersect?.()
          }
        }),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    )

    const el = target && target.current

    if (!el) {
      return
    }

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [target, enabled, root, threshold, rootMargin, onIntersect, onNotIntersect])
}
