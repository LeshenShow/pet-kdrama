import { Flex } from "@radix-ui/themes"
import { dataSettingsSelector, uiSettingsSelector, useAppSelector } from "../../hooks/useAppSelector"
import { useFilteredAndSortedFilms } from "../../../app/model/hooks/use-filtered-and-sorted-films"
import { CalloutDisplay } from "../callout/callout-display"
import { NavBar } from "../navbar/navbar"
import { ScrollToTop } from "../tooltip/tooltip"
import classNames from "classnames"
import { useCallout } from "../../../app/model/hooks/use-callout"
import { useScrollVisibility } from "../../../app/model/hooks/use-scroll-visibility"
import { useEffect, useMemo } from "react"
import { dataSettingsActions } from "../../../store/data-settings-reducer"
import { useDispatch } from "react-redux"
import { Film } from "../../../features/films/ui/film/film"

export function MainPage() {
  console.log("render main page")
  const dispatch = useDispatch()
  const { sortedFilms } = useFilteredAndSortedFilms()
  const uiSettings = useAppSelector(uiSettingsSelector)
  const isPanelVisible = useScrollVisibility()
  const { callout, toggleCallout } = useCallout()
  const dataSettings = useAppSelector(dataSettingsSelector)
  useEffect(() => {
    if (dataSettings.searchText.length > 0 && sortedFilms.length === 0) {
      toggleCallout()
      dispatch(dataSettingsActions.setSearchText(""))
    }
  }, [sortedFilms.length, dataSettings.searchText.length, dispatch, toggleCallout])
  const panelBg = classNames(
    `py-1 px-2 duration-300 transition-transform `,
    uiSettings.isDarkMode
      ? "bg-dark shadow-light/20 inset-shadow-light/10"
      : "bg-light shadow-dark/20 inset-shadow-dark/10"
  )
  const renderFilms = useMemo(
    () => sortedFilms.map(([key, film]) => <Film key={key} filmKey={key} film={film} />),
    [sortedFilms]
  )
  return (
    <>
      <ScrollToTop />
      <Flex
        minHeight={"100vh"}
        className={`bg-gradient-to-r flex-col
        ${uiSettings.isDarkMode ? "  from-dark to-dark-2  text-light" : "from-light-2 to-light text-dark"}`}
      >
        <Flex
          className={`sticky top-0  rounded-b-xl rounded-bl-xl  shadow-md z-1 ${panelBg}
          ${isPanelVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <NavBar />
        </Flex>
        <Flex
          direction={uiSettings.isMappingMode ? "row" : "column"}
          px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
          className=" items-start justify-center gap-1 flex-wrap pt-2 pb-8"
        >
          {renderFilms}
        </Flex>
        <Flex
          className={`fixed bottom-0 w-full  rounded-tr-xl rounded-t-xl inset-shadow-2xs ${panelBg}
          ${isPanelVisible ? "translate-y-full" : "-translate-y-0 "}`}
        >
          {callout.visible && <CalloutDisplay closing={callout.closing} />}
          <NavBar />
        </Flex>
      </Flex>
    </>
  )
}
