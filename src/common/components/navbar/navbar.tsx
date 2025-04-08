import {
  ViewHorizontalIcon,
  ViewGridIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import { Box, Flex, IconButton } from "@radix-ui/themes"
import { Tooltip, Avatar } from "@radix-ui/themes"
import { useDispatch } from "react-redux"
import { useAppSelector, uiSettingsSelector, dataSettingsSelector } from "../../hooks/useAppSelector"
import { DialogSearch } from "./dialog-settings/dialog-search/dialog-search"
import { DialogSettings } from "./dialog-settings/dialog-settings"
import { DropDownSort } from "./drop-down-sort/drop-down-sort"
import { uiSettingsActions } from "../../../store/ui-settings-reducer"
import { dataSettingsActions } from "../../../store/data-settings-reducer"
import { NavButton } from "./nav-button"

export function NavBar() {
  const dispatch = useDispatch()
  const uiSettings = useAppSelector(uiSettingsSelector)
  const dataSettings = useAppSelector(dataSettingsSelector)

  const toggleMappingMode = () => dispatch(uiSettingsActions.toggleMappingMode())
  const toggleIsWatchLater = () => dispatch(dataSettingsActions.toggleIsWatchLaterFilms())
  const toggleDarkMode = () => dispatch(uiSettingsActions.toggleDarkMode())

  return (
    <>
      <Box mr={"auto"}>
        <Box display={uiSettings.isDarkMode ? "none" : "block"}>
          <img src={"logo-light.png"} alt="" className={"h-8 rounded-bl-xl"} />
        </Box>
        <Box display={!uiSettings.isDarkMode ? "none" : "block"}>
          <img src={"logo-dark.png"} alt="" className={"h-8 rounded-bl-xl"} />
        </Box>
      </Box>
      <Flex gap={"2"}>
        <Tooltip content={"Отображение"}>
          <IconButton onClick={toggleMappingMode}>
            {uiSettings.isMappingMode ? <ViewHorizontalIcon /> : <ViewGridIcon />}
          </IconButton>
        </Tooltip>
        <NavButton content="Отображение" onClick={toggleMappingMode} mappingMode={uiSettings.isMappingMode} />
        <DialogSettings />
        <DropDownSort />
        <Tooltip content={"Закладки"}>
          <IconButton onClick={toggleIsWatchLater}>
            {dataSettings.isWatchLater ? <BookmarkFilledIcon /> : <BookmarkIcon />}
          </IconButton>
        </Tooltip>
        <DialogSearch />
      </Flex>
      <Flex gap={"2"} ml={"auto"}>
        <Avatar
          size={"2"}
          fallback="A"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        />
        <IconButton onClick={toggleDarkMode} variant="solid">
          {uiSettings.isDarkMode ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </>
  )
}
