import { useEffect, useState } from "react"
import { ChevronUpIcon } from "@radix-ui/react-icons"
import { Tooltip, Box, IconButton } from "@radix-ui/themes"

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Box position={"fixed"} bottom={"8"} right={{ initial: "5%", sm: "1%", md: "5%", lg: "10%" }} className=" z-50">
      {isVisible && (
        <Tooltip content="Up">
          <IconButton color={"gray"} variant="solid" radius="full" size="4" onClick={scrollToTop}>
            <ChevronUpIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}
