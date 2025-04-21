import { useState, useRef, useEffect } from "react"

export function useScrollVisibility() {
  const [isPanelVisible, setIsPanelVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setIsPanelVisible(false)
      } else {
        setIsPanelVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isPanelVisible
}
