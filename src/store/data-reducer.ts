import { dataSet, type FilmData } from "../app/data/data"
import { generateKeys } from "../app/data/generateKeys"
export type DataState = {
  [key: string]: FilmData
}
export const DATA_ACTIONS = {
  SET_USER_RATE: "SET_USER_RATE",
  TOGGLE_IS_WATCH_LATER: "TOGGLE_IS_WATCH_LATER",
} as const
export const dataActions = {
  setUserRate: (payload: { userRate: number; id: string }) => ({ type: DATA_ACTIONS.SET_USER_RATE, payload } as const),
  toggleIsWatchLater: (payload: { id: string }) => ({ type: DATA_ACTIONS.TOGGLE_IS_WATCH_LATER, payload } as const),
  // toggleIsWatchLater: () => ({ type: DATA_SETTINGS_ACTIONS.TOGGLE_IS_WATCH_LATER } as const),
  // setIsWatchedVisible: (payload: boolean) => ({ type: DATA_SETTINGS_ACTIONS.SET_IS_WATCHED_VISIBLE, payload } as const),
  // setChosenRangeRate: (payload: number[]) => ({ type: DATA_SETTINGS_ACTIONS.SET_CHOSEN_RANGE_RATE, payload } as const),
  // setChosenGenres: (payload: string[]) => ({ type: DATA_SETTINGS_ACTIONS.SET_CHOSEN_GENRES, payload } as const),
  // setChosenRangeYears: (payload: number[]) =>
  //   ({ type: DATA_SETTINGS_ACTIONS.SET_CHOSEN_RANGE_YEARS, payload } as const),
  // setSearchText: (payload: string) => ({ type: DATA_SETTINGS_ACTIONS.SET_SEARCH_TEXT, payload } as const),
}
const initialState: DataState = generateKeys(dataSet)
export type DataAction = ReturnType<(typeof dataActions)[keyof typeof dataActions]>

export const dataReducer = (state: DataState = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case DATA_ACTIONS.SET_USER_RATE:
      return { ...state, [action.payload.id]: { ...state[action.payload.id], userRate: action.payload.userRate } }
    case DATA_ACTIONS.TOGGLE_IS_WATCH_LATER:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], isWatchLater: !state[action.payload.id].isWatchLater },
      }
    default:
      return state
  }
}
