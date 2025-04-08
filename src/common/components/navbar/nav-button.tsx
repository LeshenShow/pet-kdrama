import { ViewHorizontalIcon, ViewGridIcon } from "@radix-ui/react-icons"
import { IconButton, Tooltip } from "@radix-ui/themes"
import {} from "radix-ui"

type Props = {
  content: string
  onClick: () => void
  mappingMode: boolean
}
export function NavButton({ onClick, content, mappingMode }: Props) {
  return (
    <Tooltip content={content}>
      <IconButton onClick={onClick}>{mappingMode ? <ViewHorizontalIcon /> : <ViewGridIcon />}</IconButton>
    </Tooltip>
  )
}
//const {} = props;
