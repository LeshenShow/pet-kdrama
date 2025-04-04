import { IconButton, Tooltip } from "@radix-ui/themes"
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  HeartFilledIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
} from "@radix-ui/react-icons"
import type { SortMode, Theme } from "../../../App"
import { DropDownSort } from "../drop-down-sort/drop-down-sort"
import { DropDownSettings } from "../dialog-settings/dialog-settings"
type Props = {
  toggleMappingMode: () => void
  toggleSortMode: (sortMode: SortMode) => void
  toggleDraftRangeRate: (draftRangeRate: number[]) => void
  toggleIsWatchedVisible: (isWatchedVisible: boolean) => void
  toggleIsWatchLater: () => void
  theme: Theme
}
export function Footer(props: Props) {
  return (
    <>
      <Tooltip content={"Отображение"}>
        <IconButton onClick={props.toggleMappingMode}>
          {props.theme.isMappingMode ? <ViewHorizontalIcon /> : <ViewGridIcon />}
        </IconButton>
      </Tooltip>
      <DropDownSettings
        theme={props.theme}
        toggleDraftRangeRate={props.toggleDraftRangeRate}
        toggleIsWatchedVisible={props.toggleIsWatchedVisible}
      />
      <DropDownSort toggleSortMode={props.toggleSortMode} theme={props.theme} />
      <Tooltip content={"Закладки"}>
        <IconButton onClick={props.toggleIsWatchLater}>
          {props.theme.isWatchLater ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </IconButton>
      </Tooltip>

      <IconButton size="2" variant="solid">
        <MagnifyingGlassIcon />
      </IconButton>
    </>
  )
}
