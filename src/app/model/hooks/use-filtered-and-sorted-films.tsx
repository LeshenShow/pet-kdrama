import { useMemo } from "react"
import type { FilmData } from "../../data/data"
import { Film } from "../../../features/films/ui/film/film"
import {
  useAppSelector,
  dataSelector,
  dataSettingsSelector,
  uiSettingsSelector,
} from "../../../common/hooks/useAppSelector"

export const useFilteredAndSortedFilms = () => {
  const data = useAppSelector(dataSelector)
  const dataSettings = useAppSelector(dataSettingsSelector)
  const uiSettings = useAppSelector(uiSettingsSelector)
  const filteredFilms = useMemo(() => {
    return (Object.entries(data) as [string, FilmData][]).filter(([, film]) => {
      const isWithinRate =
        film.rateKinopoisk > dataSettings.chosenRangeRate[0] && film.rateKinopoisk < dataSettings.chosenRangeRate[1]
      const isWithinYears = film.year > dataSettings.chosenRangeYears[0] && film.year < dataSettings.chosenRangeYears[1]
      const isNotWatched = !dataSettings.isWatchedVisible ? film.userRate === 0 : true
      const isInBookmarks = dataSettings.isWatchLater ? film.isWatchLater : true
      const isWithinGenres =
        dataSettings.chosenGenres.length === 0 || film.genre.some((g) => dataSettings.chosenGenres.includes(g))
      const isWithinSearch =
        dataSettings.searchText.length === 0 || film.name.toLowerCase().includes(dataSettings.searchText.toLowerCase())
      return isWithinRate && isWithinYears && isNotWatched && isInBookmarks && isWithinGenres && isWithinSearch
    })
  }, [
    data,
    dataSettings.chosenRangeRate,
    dataSettings.chosenRangeYears,
    dataSettings.isWatchedVisible,
    dataSettings.isWatchLater,
    dataSettings.chosenGenres,
    dataSettings.searchText,
  ])
  const sortedFilms = useMemo(() => {
    const arr = [...filteredFilms]
    arr.sort((filmA, filmB) => {
      const a = filmA[1]
      const b = filmB[1]
      switch (uiSettings.sortMode) {
        case "imdb":
          return b.rateIMDB - a.rateIMDB
        case "kinopoisk":
          return b.rateKinopoisk - a.rateKinopoisk
        case "user":
          return b.userRate - a.userRate
        default:
          return 0
      }
    })
    return arr.map(([key, film]) => <Film key={key} film={film} filmKey={key} />)
  }, [filteredFilms, uiSettings.sortMode])

  return { sortedFilms }
}
