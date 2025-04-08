export type SortMode = "imdb" | "kinopoisk" | "user" | "default"
export type UiSettings = {
  isDarkMode: boolean
  isMappingMode: boolean
  sortMode: SortMode
}

export const UI_SETTINGS_ACTIONS = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
  TOGGLE_MAPPING_MODE: "TOGGLE_MAPPING_MODE",
  SET_SORT_MODE: "SET_SORT_MODE",
}
export const uiSettingsActions = {
  toggleDarkMode: () => ({ type: UI_SETTINGS_ACTIONS.TOGGLE_DARK_MODE } as const),
  toggleMappingMode: () => ({ type: UI_SETTINGS_ACTIONS.TOGGLE_MAPPING_MODE } as const),
  setSortMode: (payload: SortMode) => ({ type: UI_SETTINGS_ACTIONS.SET_SORT_MODE, payload } as const),
}
const initialState: UiSettings = {
  isDarkMode: true,
  isMappingMode: false,
  sortMode: "default",
}
// export type UiSettingsAction =ReturnType<(typeof uiSettingsActions)[keyof typeof uiSettingsActions]>
export type UiSettingsAction =
  | { type: typeof UI_SETTINGS_ACTIONS.TOGGLE_DARK_MODE }
  | { type: typeof UI_SETTINGS_ACTIONS.TOGGLE_MAPPING_MODE }
  | { type: typeof UI_SETTINGS_ACTIONS.SET_SORT_MODE; payload: SortMode }
export const uiSettingsReducer = (state: UiSettings = initialState, action: UiSettingsAction): UiSettings => {
  switch (action.type) {
    case UI_SETTINGS_ACTIONS.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode }
    case UI_SETTINGS_ACTIONS.TOGGLE_MAPPING_MODE:
      return { ...state, isMappingMode: !state.isMappingMode }
    case UI_SETTINGS_ACTIONS.SET_SORT_MODE:
      return { ...state, sortMode: action.payload }
    default:
      return state
  }
}
