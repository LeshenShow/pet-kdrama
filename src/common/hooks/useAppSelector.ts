import { TypedUseSelectorHook, useSelector } from "react-redux"
import type { RootState } from "../../store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const dataSettingsSelector = (state: RootState) => state.dataSettings
export const uiSettingsSelector = (state: RootState) => state.uiSettings
export const dataSelector = (state: RootState) => state.data
export const authSelector = (state: RootState) => state.auth
