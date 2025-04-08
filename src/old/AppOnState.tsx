// import { Callout, Flex, Theme as ThemeRadix } from "@radix-ui/themes"
// import "./App.css"
// import { dataSet } from "../app/data/data"
// import { useEffect, useMemo, useReducer, useRef, useState } from "react"
// import { Film } from "../features/films/ui/film/film"
// import classNames from "classnames"
// import { ScrollToTop } from "../common/components/tooltip/tooltip"
// import { NavBar } from "../common/components/navbar/navbar"
// import { InfoCircledIcon } from "@radix-ui/react-icons"
// import { uiSettingsReducer } from "../app/model/ui-settings-reducer"

// const createTheme = (): Theme => {
//   const genres = new Set<string>()
//   const years = new Set<number>()
//   const rates = new Set<number>()
//   dataSet.forEach((f) => {
//     f.genre.forEach((g) => genres.add(g))
//     years.add(f.year)
//     rates.add(f.rateKinopoisk).add(f.rateIMDB)
//   })
//   const rangeYears = [Math.min(...years), Math.max(...years)]
//   const listGenres = Array.from(genres).sort()
//   return {
//     isWatchedVisible: true,
//     isWatchLater: false,
//     listGenres,
//     chosenGenres: [],
//     rangeYears,
//     chosenRangeYears: rangeYears,
//     rangeRate: [Math.min(...rates), Math.max(...rates)],
//     chosenRangeRate: [1, 10],
//     searchText: "",
//   }
// }
// export function App() {
//   const [uiSettings, dispatchUiSettings] = useReducer(uiSettingsReducer, {
//     isDarkMode: true,
//     isMappingMode: false,
//     sortMode: "default",
//   })
//   const [isPanelVisible, setIsPanelVisible] = useState(true)
//   const lastScrollY = useRef(0)
//   const [theme, setTheme] = useState<Theme>(() => createTheme())
//   const [callout, setCallout] = useState({ visible: false, closing: false })
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY
//       if (currentScrollY > lastScrollY.current) {
//         setIsPanelVisible(false)
//       } else {
//         setIsPanelVisible(true)
//       }
//       lastScrollY.current = currentScrollY
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   const toggleChosenRangeRate = (chosenRangeRate: number[]) => {
//     setTheme((prev) => ({ ...prev, chosenRangeRate }))
//   }
//   const toggleIsWatchedVisible = (isWatchedVisible: boolean) => {
//     setTheme((prev) => ({ ...prev, isWatchedVisible }))
//   }
//   const toggleChosenGenres = (chosenGenres: string[]) => {
//     setTheme((prev) => ({ ...prev, chosenGenres }))
//   }
//   const toggleChosenRangeYears = (chosenRangeYears: number[]) => {
//     setTheme((prev) => ({ ...prev, chosenRangeYears }))
//   }
//   const toggleIsWatchLater = () => {
//     setTheme((prev) => ({ ...prev, isWatchLater: !prev.isWatchLater }))
//   }
//   const toggleSearchText = (searchText: string) => {
//     setTheme((prev) => ({ ...prev, searchText }))
//   }
//   const toggleCalloutNoContent = () => {
//     setCallout({ visible: true, closing: false })
//     const fadeTimer = setTimeout(() => {
//       setCallout((prev) => ({ ...prev, closing: true }))
//     }, 2700)
//     const hideTimer = setTimeout(() => {
//       setCallout({ visible: false, closing: false })
//     }, 3000)
//     return () => {
//       clearTimeout(fadeTimer)
//       clearTimeout(hideTimer)
//     }
//   }
//   const filteredFilms = useMemo(() => {
//     return dataSet.filter((f) => {
//       const isWithinRate = f.rateKinopoisk > theme.chosenRangeRate[0] && f.rateKinopoisk < theme.chosenRangeRate[1]
//       const isWithinYears = f.year > theme.chosenRangeYears[0] && f.year < theme.chosenRangeYears[1]
//       const isNotWatched = !theme.isWatchedVisible ? f.userRate === 0 : true
//       const isInBookmarks = theme.isWatchLater ? f.isWatchLater : true
//       const isWithinGenres = theme.chosenGenres.length === 0 || f.genre.some((g) => theme.chosenGenres.includes(g))
//       const isWithinSearch =
//         theme.searchText.length === 0 || f.name.toLowerCase().includes(theme.searchText.toLowerCase())
//       return isWithinRate && isWithinYears && isNotWatched && isInBookmarks && isWithinGenres && isWithinSearch
//     })
//   }, [
//     theme.chosenRangeRate,
//     theme.chosenRangeYears,
//     theme.isWatchedVisible,
//     theme.isWatchLater,
//     theme.chosenGenres,
//     theme.searchText,
//   ])
//   const sortedFilms = useMemo(() => {
//     const arr = [...filteredFilms]
//     switch (uiSettings.sortMode) {
//       case "imdb":
//         arr.sort((a, b) => b.rateIMDB - a.rateIMDB)
//         break
//       case "kinopoisk":
//         arr.sort((a, b) => b.rateKinopoisk - a.rateKinopoisk)
//         break
//       case "user":
//         arr.sort((a, b) => b.userRate - a.userRate)
//         break
//     }
//     return arr
//   }, [filteredFilms, uiSettings.sortMode])
//   useEffect(() => {
//     if (theme.searchText.length > 0 && sortedFilms.length === 0) {
//       toggleCalloutNoContent()
//       setTheme((prev) => ({ ...prev, searchText: "" }))
//     }
//   }, [sortedFilms.length, theme.searchText.length])
//   const panelBg = classNames(
//     `${
//       uiSettings.isDarkMode
//         ? "bg-dark shadow-light/20 inset-shadow-light/10"
//         : "bg-light shadow-dark/20 inset-shadow-dark/10"
//     }`,
//     `py-1 px-2 duration-300 transition-transform `
//   )
//   const navBarActions = {
//     toggleDarkMode: () => dispatchUiSettings({ type: "TOGGLE_DARK_MODE" }),
//     toggleMappingMode: () => dispatchUiSettings({ type: "TOGGLE_MAPPING_MODE" }),
//     toggleSortMode: (sortMode: SortMode) => dispatchUiSettings({ type: "SET_SORT_MODE", payload: sortMode }),
//     toggleIsWatchedVisible,
//     toggleIsWatchLater,
//     toggleChosenRangeRate,
//     toggleChosenRangeYears,
//     toggleChosenGenres,
//     toggleSearchText,
//   }

//   return (
//     <ThemeRadix accentColor="violet" radius="medium" appearance={uiSettings.isDarkMode ? "dark" : "light"}>
//       {/* <ThemePanel /> */}
//       <ScrollToTop />

//       <Flex
//         direction={"column"}
//         minHeight={"100vh"}
//         className={`bg-gradient-to-r
//         ${uiSettings.isDarkMode ? "  from-dark to-dark-2  text-light" : "from-light-2 to-light text-dark"}`}
//       >
//         <Flex
//           position="sticky"
//           top="0"
//           className={`${panelBg} rounded-b-xl rounded-bl-xl  shadow-md z-1
//           ${isPanelVisible ? "translate-y-0" : "-translate-y-full"}`}
//         >
//           <NavBar navBarActions={navBarActions} theme={theme} uiSettings={uiSettings} />
//         </Flex>

//         <Flex
//           direction={uiSettings.isMappingMode ? "row" : "column"}
//           wrap="wrap"
//           gap="1"
//           align="start"
//           justify="center"
//           px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
//           pt={"2"}
//           pb="8"
//           className=" "
//         >
//           {sortedFilms.map((f, i) => (
//             <Film film={f} key={f.name} theme={theme} index={i} uiSettings={uiSettings} />
//           ))}
//         </Flex>
//         <Flex
//           position="fixed"
//           width="100%"
//           bottom="0"
//           className={`${panelBg} rounded-tr-xl rounded-t-xl inset-shadow-2xs
//           ${isPanelVisible ? "translate-y-full" : "-translate-y-0 "}`}
//         >
//           {callout.visible && (
//             <Flex
//               position={"fixed"}
//               bottom={"7"}
//               className={classNames(
//                 "bg-light-2/100 rounded-xl transition-all duration-300",
//                 callout.closing ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
//               )}
//             >
//               <Callout.Root variant="soft">
//                 <Callout.Icon>
//                   <InfoCircledIcon />
//                 </Callout.Icon>
//                 <Callout.Text color="gray">Ничего не нашлось</Callout.Text>
//               </Callout.Root>
//             </Flex>
//           )}

//           <NavBar navBarActions={navBarActions} theme={theme} uiSettings={uiSettings} />
//         </Flex>
//       </Flex>
//     </ThemeRadix>
//   )
// }
// export type SortMode = "imdb" | "kinopoisk" | "user" | "default"
// export type Theme = {
//   isWatchLater: boolean
//   isWatchedVisible: boolean
//   listGenres: string[]
//   chosenGenres: string[]
//   rangeRate: number[]
//   chosenRangeRate: number[]
//   rangeYears: number[]
//   chosenRangeYears: number[]
//   searchText: string
// }
export {}
