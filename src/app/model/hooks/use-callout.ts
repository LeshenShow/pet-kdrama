import { useState } from "react"

export const useCallout = () => {
  const [callout, setCallout] = useState({ visible: false, closing: false })

  const toggleCallout = () => {
    setCallout({ visible: true, closing: false })
    const fadeTimer = setTimeout(() => {
      setCallout((prev) => ({ ...prev, closing: true }))
    }, 2700)
    const hideTimer = setTimeout(() => {
      setCallout({ visible: false, closing: false })
    }, 3000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }

  return { callout, toggleCallout }
}
