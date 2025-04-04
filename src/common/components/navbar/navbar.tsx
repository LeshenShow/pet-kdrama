import { IconButton, Tooltip, Avatar, Box, Flex } from "@radix-ui/themes"
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import type { SortMode, Theme } from "../../../App"
import { DialogSettings } from "./dialog-settings/dialog-settings"
import { DropDownSort } from "./drop-down-sort/drop-down-sort"
import { DialogSearch } from "./dialog-settings/dialog-search/dialog-search"
type Props = {
  navBarActions: {
    toggleDarkMode: () => void
    toggleMappingMode: () => void
    toggleSortMode: (sortMode: SortMode) => void
    toggleChosenRangeRate: (chosenRangeRate: number[]) => void
    toggleIsWatchedVisible: (isWatchedVisible: boolean) => void
    toggleIsWatchLater: () => void
    toggleChosenRangeYears: (chosenRangeYears: number[]) => void
    toggleChosenGenres: (chosenGenres: string[]) => void
    toggleSearchText: (searchText: string) => void
  }
  theme: Theme
}
export function NavBar(props: Props) {
  const {
    toggleDarkMode,
    toggleMappingMode,
    toggleSortMode,
    toggleChosenRangeRate,
    toggleIsWatchedVisible,
    toggleIsWatchLater,
    toggleChosenRangeYears,
    toggleChosenGenres,
    toggleSearchText,
  } = props.navBarActions

  return (
    <>
      <Box mr={"auto"}>
        <Box display={props.theme.isDarkMode ? "none" : "block"}>
          <img src={"logo-light.png"} alt="" className={"h-8 rounded-bl-xl"} />
        </Box>
        <Box display={!props.theme.isDarkMode ? "none" : "block"}>
          <img src={"logo-dark.png"} alt="" className={"h-8 rounded-bl-xl"} />
        </Box>
      </Box>
      <Flex gap={"2"}>
        <Tooltip content={"Отображение"}>
          <IconButton onClick={toggleMappingMode}>
            {props.theme.isMappingMode ? <ViewHorizontalIcon /> : <ViewGridIcon />}
          </IconButton>
        </Tooltip>
        <DialogSettings
          theme={props.theme}
          toggleChosenRangeRate={toggleChosenRangeRate}
          toggleIsWatchedVisible={toggleIsWatchedVisible}
          toggleChosenRangeYears={toggleChosenRangeYears}
          toggleChosenGenres={toggleChosenGenres}
        />
        <DropDownSort toggleSortMode={toggleSortMode} theme={props.theme} />
        <Tooltip content={"Закладки"}>
          <IconButton onClick={toggleIsWatchLater}>
            {props.theme.isWatchLater ? <BookmarkFilledIcon /> : <BookmarkIcon />}
          </IconButton>
        </Tooltip>
        <DialogSearch toggleSearchText={toggleSearchText} />
      </Flex>
      <Flex gap={"2"} ml={"auto"}>
        <Avatar
          size={"2"}
          fallback="A"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        />
        <IconButton onClick={toggleDarkMode} variant="solid">
          {props.theme.isDarkMode ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </>
  )
}
// ml={"auto"}
// mr={"auto"}
