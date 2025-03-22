import { IconButton } from "@radix-ui/themes"
import {
  Component2Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  TextAlignTopIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
} from "@radix-ui/react-icons"
import type { Theme } from "../../../App"
type Props = {
  toggleMappingMode: () => void
  theme: Theme
}
export function Footer(props: Props) {
  return (
    <>
      <IconButton size="2" variant="solid" onClick={() => props.toggleMappingMode()}>
        {props.theme.isMappingMode ? (
          <ViewHorizontalIcon width="22" height="22" />
        ) : (
          <ViewGridIcon width="22" height="22" />
        )}
      </IconButton>
      <IconButton size="2" variant="solid" disabled>
        <TextAlignTopIcon width="22" height="22" />
      </IconButton>
      <IconButton size="2" variant="solid" disabled>
        <HeartIcon width="22" height="22" />
      </IconButton>
      <IconButton size="2" variant="solid" disabled>
        <MagnifyingGlassIcon width="22" height="22" />
      </IconButton>
    </>
  )
}
//const {} = props;
