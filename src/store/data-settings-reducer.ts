import { dataSet } from "../app/data/data"
export type DataSettings = {
  isWatchLater: boolean
  isWatchedVisible: boolean
  listGenres: string[]
  chosenGenres: string[]
  rangeRate: number[]
  chosenRangeRate: number[]
  rangeYears: number[]
  chosenRangeYears: number[]
  searchText: string
}
const createSettings = (): DataSettings => {
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
    isWatchedVisible: true,
    isWatchLater: false,
    listGenres,
    chosenGenres: [],
    rangeYears,
    chosenRangeYears: rangeYears,
    rangeRate: [Math.min(...rates), Math.max(...rates)],
    chosenRangeRate: [1, 10],
    searchText: "",
  }
}
export const DATA_SETTINGS_ACTIONS = {
  TOGGLE_IS_WATCH_LATER_FILMS: "TOGGLE_IS_WATCH_LATER_FILMS",
  SET_IS_WATCHED_VISIBLE: "SET_IS_WATCHED_VISIBLE",
  SET_CHOSEN_RANGE_RATE: "SET_CHOSEN_RANGE_RATE",
  SET_CHOSEN_GENRES: "SET_CHOSEN_GENRES",
  SET_CHOSEN_RANGE_YEARS: "SET_CHOSEN_RANGE_YEARS",
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
} as const
export const dataSettingsActions = {
  toggleIsWatchLaterFilms: () => ({ type: DATA_SETTINGS_ACTIONS.TOGGLE_IS_WATCH_LATER_FILMS } as const),
  setIsWatchedVisible: (payload: boolean) => ({ type: DATA_SETTINGS_ACTIONS.SET_IS_WATCHED_VISIBLE, payload } as const),
  setChosenRangeRate: (payload: number[]) => ({ type: DATA_SETTINGS_ACTIONS.SET_CHOSEN_RANGE_RATE, payload } as const),
  setChosenGenres: (payload: string[]) => ({ type: DATA_SETTINGS_ACTIONS.SET_CHOSEN_GENRES, payload } as const),
  setChosenRangeYears: (payload: number[]) =>
    ({ type: DATA_SETTINGS_ACTIONS.SET_CHOSEN_RANGE_YEARS, payload } as const),
  setSearchText: (payload: string) => ({ type: DATA_SETTINGS_ACTIONS.SET_SEARCH_TEXT, payload } as const),
}
const initialState: DataSettings = createSettings()
export type DataSettingsAction = ReturnType<(typeof dataSettingsActions)[keyof typeof dataSettingsActions]>

export const dataSettingsReducer = (state: DataSettings = initialState, action: DataSettingsAction): DataSettings => {
  switch (action.type) {
    case DATA_SETTINGS_ACTIONS.TOGGLE_IS_WATCH_LATER_FILMS:
      return { ...state, isWatchLater: !state.isWatchLater }
    case DATA_SETTINGS_ACTIONS.SET_IS_WATCHED_VISIBLE:
      return { ...state, isWatchedVisible: action.payload }
    case DATA_SETTINGS_ACTIONS.SET_CHOSEN_RANGE_RATE:
      return { ...state, chosenRangeRate: action.payload }
    case DATA_SETTINGS_ACTIONS.SET_CHOSEN_GENRES:
      return { ...state, chosenGenres: action.payload }
    case DATA_SETTINGS_ACTIONS.SET_CHOSEN_RANGE_YEARS:
      return { ...state, chosenRangeYears: action.payload }
    case DATA_SETTINGS_ACTIONS.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload }
    default:
      return state
  }
}

// export const toggleIsWatchLater = () => ({ type: "TOGGLE_IS_WATCH_LATER" } as const)
// export const toggleIsWatchedVisible = () => ({ type: "TOGGLE_IS_WATCHED_VISIBLE" } as const)
// export const setChosenRangeRate = (chosenRangeRate: number[]) =>
//   ({
//     type: "SET_CHOSEN_RANGE_RATE",
//     payload: chosenRangeRate,
//   } as const)
// export const setChosenGenres = (chosenGenres: string[]) =>
//   ({
//     type: "SET_CHOSEN_GENRES",
//     payload: chosenGenres,
//   } as const)
// export const setChosenRangeYears = (chosenRangeYears: number[]) =>
//   ({
//     type: "SET_CHOSEN_RANGE_YEARS",
//     payload: chosenRangeYears,
//   } as const)
// export const setSearchText = (searchText: string) =>
//   ({
//     type: "SET_SEARCH_TEXT",
//     payload: searchText,
//   } as const)
// export const dataSettingsActions = {
//   toggleIsWatchLater,
//   toggleIsWatchedVisible,
//   setChosenRangeRate,
//   setChosenGenres,
//   setChosenRangeYears,
//   setSearchText,
// }
