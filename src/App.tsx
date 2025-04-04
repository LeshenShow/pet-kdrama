import { Box, Flex, Theme as ThemeRadix } from "@radix-ui/themes"
import "./App.css"
import { dataSet, type FilmData } from "./app/data/data"
import { useEffect, useRef, useState } from "react"
import { Film } from "./features/films/ui/film/film"
import classNames from "classnames"
import { ScrollToTop } from "./common/components/tooltip/tooltip"
import { NavBar } from "./common/components/navbar/navbar"
const createTheme = (): Theme => {
  const genres = new Set<string>()
  const years = new Set<number>()
  const rates = new Set<number>()
  dataSet.forEach((f) => {
    f.genre.forEach((g) => genres.add(g))
    years.add(f.year)
    rates.add(f.rateKinopoisk).add(f.rateIMDB)
  })
  const rangeYears = [Math.min(...years), Math.max(...years)]
  const listGenres = Array.from(genres).sort()
  return {
    isDarkMode: true,
    isMappingMode: false,
    sortMode: "default",
    isWatchedVisible: true,
    isWatchLater: false,
    listGenres,
    chosenGenres: [],
    rangeYears,
    chosenRangeYears: rangeYears,
    rangeRate: [Math.min(...rates), Math.max(...rates)],
    chosenRangeRate: [0, 10],
    searchText: "",
  }
}
export function App() {
  const [isPanelVisible, setIsPanelVisible] = useState(true)
  const lastScrollY = useRef(0)
  const [theme, setTheme] = useState<Theme>(() => createTheme())
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
  const toggleDarkMode = () => {
    setTheme((prev) => ({ ...prev, isDarkMode: !prev.isDarkMode }))
  }
  const toggleMappingMode = () => {
    setTheme((prev) => ({ ...prev, isMappingMode: !prev.isMappingMode }))
  }
  const toggleSortMode = (sortMode: SortMode) => {
    setTheme((prev) => ({ ...prev, sortMode }))
  }
  const toggleChosenRangeRate = (chosenRangeRate: number[]) => {
    setTheme((prev) => ({ ...prev, chosenRangeRate }))
  }
  const toggleIsWatchedVisible = (isWatchedVisible: boolean) => {
    setTheme((prev) => ({ ...prev, isWatchedVisible }))
  }
  const toggleChosenGenres = (chosenGenres: string[]) => {
    setTheme((prev) => ({ ...prev, chosenGenres }))
  }
  const toggleChosenRangeYears = (chosenRangeYears: number[]) => {
    setTheme((prev) => ({ ...prev, chosenRangeYears }))
  }
  const toggleIsWatchLater = () => {
    setTheme((prev) => ({ ...prev, isWatchLater: !prev.isWatchLater }))
  }
  const toggleSearchText = (searchText: string) => {
    setTheme((prev) => ({ ...prev, searchText }))
  }
  const filmsArray = (theme: Theme, array: FilmData[] = dataSet) => {
    const filmsArrayWithSettings = array.filter((f) => {
      const isWithinRate = f.rateKinopoisk > theme.chosenRangeRate[0] && f.rateKinopoisk < theme.chosenRangeRate[1]
      const isWithinYears = f.year > theme.chosenRangeYears[0] && f.year < theme.chosenRangeYears[1]
      const isNotWatched = !theme.isWatchedVisible ? f.userRate === 0 : true
      const isInBookmarks = theme.isWatchLater ? f.isWatchLater : true
      const isWithinGenres = theme.chosenGenres.length === 0 || f.genre.some((g) => theme.chosenGenres.includes(g))
      const isWithinSearch = theme.searchText.length === 0 || f.name.toLocaleLowerCase().includes(theme.searchText)

      return isWithinRate && isWithinYears && isNotWatched && isInBookmarks && isWithinGenres && isWithinSearch
    })
    switch (theme.sortMode) {
      // case "default":
      //   filmsArrayWitchSettings.sort((a, b) => b.rateIMDB - a.rateIMDB)
      //   break
      case "imdb":
        filmsArrayWithSettings.sort((a, b) => b.rateIMDB - a.rateIMDB)
        break
      case "kinopoisk":
        filmsArrayWithSettings.sort((a, b) => b.rateKinopoisk - a.rateKinopoisk)
        break
      case "user":
        filmsArrayWithSettings.sort((a, b) => b.userRate - a.userRate)
        break
    }
    return filmsArrayWithSettings.map((f, i) => <Film film={f} key={f.name} theme={theme} index={i} />)
  }
  const panelBg = classNames(
    `${
      theme.isDarkMode
        ? "bg-dark shadow-light/20 inset-shadow-light/10"
        : "bg-light shadow-dark/20 inset-shadow-dark/10"
    }`,
    `py-1 px-2 duration-300 transition-transform `
  )
  const navBarActions = {
    toggleDarkMode,
    toggleMappingMode,
    toggleSortMode,
    toggleIsWatchedVisible,
    toggleIsWatchLater,
    toggleChosenRangeRate,
    toggleChosenRangeYears,
    toggleChosenGenres,
    toggleSearchText,
  }
  return (
    <ThemeRadix accentColor="violet" radius="medium" appearance={theme.isDarkMode ? "light" : "dark"}>
      {/* <ThemePanel /> */}
      <ScrollToTop />
      <Flex
        direction={"column"}
        // overflow={"hidden"}
        // position={"relative"}
        minHeight={"100vh"}
        className={`bg-gradient-to-r
        ${theme.isDarkMode ? "  from-dark to-dark-2  text-light" : "from-light-2 to-light text-dark"}`}
      >
        <Flex
          position="sticky"
          top="0"
          className={`${panelBg} rounded-b-xl rounded-bl-xl  shadow-md z-1
          ${isPanelVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <NavBar navBarActions={navBarActions} theme={theme} />
        </Flex>
        <Flex
          direction={theme.isMappingMode ? "row" : "column"}
          // position={"relative"}
          // minHeight="100vh"
          wrap="wrap"
          gap="1"
          align="start"
          justify="center"
          px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
          pt={"2"}
          pb="8"
          className=" "
        >
          {filmsArray(theme, dataSet)}
        </Flex>
        <Flex
          position="fixed"
          width="100%"
          bottom="0"
          className={`${panelBg} rounded-tr-xl rounded-t-xl inset-shadow-2xs
          ${isPanelVisible ? "translate-y-full" : "-translate-y-0 "}`}
        >
          <NavBar navBarActions={navBarActions} theme={theme} />
        </Flex>
      </Flex>
    </ThemeRadix>
  )
}
export type SortMode = "imdb" | "kinopoisk" | "user" | "default"
export type Theme = {
  isDarkMode: boolean
  isMappingMode: boolean
  isWatchLater: boolean
  isWatchedVisible: boolean
  sortMode: SortMode
  listGenres: string[]
  chosenGenres: string[]
  rangeRate: number[]
  chosenRangeRate: number[]
  rangeYears: number[]
  chosenRangeYears: number[]
  searchText: string
}
