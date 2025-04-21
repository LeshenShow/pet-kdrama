import { IconButton, Tooltip } from "@radix-ui/themes"
import { ReactNode } from "react"

type Props = {
  content: string
  // onClick?: () => void
  onClick?: (e: React.MouseEvent) => void
  stopPropagation?: boolean
  icon?: ReactNode
  iconToggle?: { on: ReactNode; off: ReactNode }
  isActive?: boolean
  variant?: "solid" | "classic" | "soft" | "surface" | "outline" | "ghost"
  disabled?: boolean
  className?: string
  size?: "1" | "2" | "3"
  color?: "gray" | "blue" | "green" | "red" | "violet" | "indigo" | "orange"
  ariaLabel?: string
}

export function IconTooltipButton({
  content,
  onClick,
  icon,
  iconToggle,
  isActive = false,
  variant = "solid",
  disabled,
  className,
  size,
  color,
  ariaLabel,
  stopPropagation,
}: Props) {
  const handleOnClick = (e: React.MouseEvent) => {
    console.log(stopPropagation)
    if (stopPropagation) {
      e.stopPropagation()
      e.preventDefault()
    }
    onClick?.(e)
  }
  const button = (
    <Tooltip content={content}>
      <IconButton
        onClick={handleOnClick}
        variant={variant}
        disabled={disabled}
        className={className}
        size={size}
        color={color}
        aria-label={ariaLabel || content}
      >
        {iconToggle ? (isActive ? iconToggle.on : iconToggle.off) : icon}
      </IconButton>
    </Tooltip>
  )
  return button
}
