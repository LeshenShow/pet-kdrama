// import { createStore, combineReducers } from "redux"
import { combineReducers } from "redux"
import { uiSettingsReducer } from "./ui-settings-reducer"
import { legacy_createStore as createStore } from "redux"
import { dataSettingsReducer } from "./data-settings-reducer"
import { dataReducer } from "./data-reducer"
import { authReducer } from "../features/auth/model/auth-reducer"
const rootReducer = combineReducers({
  uiSettings: uiSettingsReducer,
  dataSettings: dataSettingsReducer,
  data: dataReducer,
  auth: authReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
