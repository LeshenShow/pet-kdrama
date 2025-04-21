import {
  ViewHorizontalIcon,
  ViewGridIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  MoonIcon,
  SunIcon,
  EnterIcon,
} from "@radix-ui/react-icons"
import { Box, Flex, Tooltip } from "@radix-ui/themes"
import { Avatar } from "@radix-ui/themes"
import { useDispatch } from "react-redux"
import { useAppSelector, uiSettingsSelector, dataSettingsSelector, authSelector } from "../../hooks/useAppSelector"
import { DialogSearch } from "./dialog-settings/dialog-search/dialog-search"
import { DialogSettings } from "./dialog-settings/dialog-settings"
import { DropDownSort } from "./drop-down-sort/drop-down-sort"
import { uiSettingsActions } from "../../../store/ui-settings-reducer"
import { dataSettingsActions } from "../../../store/data-settings-reducer"
import { IconTooltipButton } from "../../../features/films/ui/icon-button/icon-button"
import { authActions } from "../../../features/auth/model/auth-reducer"
import { Link, Navigate } from "react-router-dom"
import { Path } from "../../../app/router/router"
export function NavBar() {
  const uiSettings = useAppSelector(uiSettingsSelector)
  const dataSettings = useAppSelector(dataSettingsSelector)
  const auth = useAppSelector(authSelector)
  const dispatch = useDispatch()
  const toggleMappingMode = () => dispatch(uiSettingsActions.toggleMappingMode())
  const toggleIsWatchLater = () => dispatch(dataSettingsActions.toggleIsWatchLaterFilms())
  const toggleDarkMode = () => dispatch(uiSettingsActions.toggleDarkMode())
  const logout = () => dispatch(authActions.logout())
  const redirectUser = () => <Navigate to={Path.Login} />

  return (
    <>
      <Link to={Path.Main} className="contents">
        <Box mr={"auto"}>
          <Box display={uiSettings.isDarkMode ? "none" : "block"}>
            <img src={"logo-light.png"} alt="" className={"h-8 rounded-bl-xl"} />
          </Box>
          <Box display={!uiSettings.isDarkMode ? "none" : "block"}>
            <img src={"logo-dark.png"} alt="" className={"h-8 rounded-bl-xl"} />
          </Box>
        </Box>
      </Link>
      <Flex gap={"2"}>
        <IconTooltipButton
          content="Отображение"
          onClick={toggleMappingMode}
          iconToggle={{
            on: <ViewHorizontalIcon />,
            off: <ViewGridIcon />,
          }}
          isActive={uiSettings.isMappingMode}
        />
        <DialogSettings />
        <DropDownSort />
        <IconTooltipButton
          content={"Закладки"}
          onClick={toggleIsWatchLater}
          iconToggle={{
            on: <BookmarkFilledIcon />,
            off: <BookmarkIcon />,
          }}
          isActive={dataSettings.isWatchLater}
          disabled={auth.isAuthenticated ? false : true}
        />
        <DialogSearch />
      </Flex>
      <Flex gap={"2"} ml={"auto"} width={"96px"} justify={"center"}>
        {auth.isAuthenticated ? (
          <Tooltip content={"Выйти"}>
            <Avatar
              onClick={logout}
              size={"2"}
              fallback="A"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            />
          </Tooltip>
        ) : (
          <IconTooltipButton content="Войти" onClick={redirectUser} icon={<EnterIcon />} />
        )}

        <IconTooltipButton
          content="Цветовая тема"
          onClick={toggleDarkMode}
          isActive={uiSettings.isMappingMode}
          iconToggle={{
            on: <SunIcon />,
            off: <MoonIcon />,
          }}
        />
      </Flex>
    </>
  )
}
