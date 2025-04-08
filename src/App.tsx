import { Callout, Flex, Theme as ThemeRadix } from "@radix-ui/themes"
import "./App.css"
import { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { ScrollToTop } from "./common/components/tooltip/tooltip"
import { NavBar } from "./common/components/navbar/navbar"
import { InfoCircledIcon } from "@radix-ui/react-icons"
import { dataSettingsActions } from "./store/data-settings-reducer"
import { useDispatch } from "react-redux"
import { dataSettingsSelector, uiSettingsSelector, useAppSelector } from "./common/hooks/useAppSelector"
import { useFilteredAndSortedFilms } from "./app/model/hooks/use-filtered-and-sorted-films"
import { useCallout } from "./app/model/hooks/use-callout"

export function App() {
  const dispatch = useDispatch()
  const uiSettings = useAppSelector(uiSettingsSelector)
  const dataSettings = useAppSelector(dataSettingsSelector)
  const { sortedFilms } = useFilteredAndSortedFilms()
  const { callout, toggleCallout } = useCallout()
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
  useEffect(() => {
    if (dataSettings.searchText.length > 0 && sortedFilms.length === 0) {
      toggleCallout()
      dispatch(dataSettingsActions.setSearchText(""))
    }
  }, [sortedFilms.length, dataSettings.searchText.length, dispatch, toggleCallout])

  const panelBg = classNames(
    `${
      uiSettings.isDarkMode
        ? "bg-dark shadow-light/20 inset-shadow-light/10"
        : "bg-light shadow-dark/20 inset-shadow-dark/10"
    }`,
    `py-1 px-2 duration-300 transition-transform `
  )
  return (
    <ThemeRadix accentColor="violet" radius="medium" appearance={uiSettings.isDarkMode ? "dark" : "light"}>
      {/* <ThemePanel /> */}
      <ScrollToTop />
      <Flex
        minHeight={"100vh"}
        className={`bg-gradient-to-r flex-col
        ${uiSettings.isDarkMode ? "  from-dark to-dark-2  text-light" : "from-light-2 to-light text-dark"}`}
      >
        <Flex
          className={`sticky top-0 ${panelBg} rounded-b-xl rounded-bl-xl  shadow-md z-1
          ${isPanelVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <NavBar />
        </Flex>

        <Flex
          direction={uiSettings.isMappingMode ? "row" : "column"}
          px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
          className=" items-start justify-center gap-1 flex-wrap pt-2 pb-8"
        >
          {sortedFilms}
        </Flex>
        <Flex
          className={`fixed bottom-0 w-full ${panelBg} rounded-tr-xl rounded-t-xl inset-shadow-2xs
          ${isPanelVisible ? "translate-y-full" : "-translate-y-0 "}`}
        >
          {callout.visible && (
            <Flex
              className={classNames(
                "fixed bottom-7 bg-light-2/100 rounded-xl transition-all duration-300",
                callout.closing ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
              )}
            >
              <Callout.Root variant="soft">
                <Callout.Icon>
                  <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text color="gray">Ничего не нашлось</Callout.Text>
              </Callout.Root>
            </Flex>
          )}
          <NavBar />
        </Flex>
      </Flex>
    </ThemeRadix>
  )
}
