import { Theme as ThemeRadix } from "@radix-ui/themes"
import "./App.css"
import { uiSettingsSelector, useAppSelector } from "./common/hooks/useAppSelector"
import { Outlet } from "react-router-dom"
import { shallowEqual } from "react-redux"

export function App() {
  const uiSettings = useAppSelector(uiSettingsSelector, shallowEqual)
  return (
    <ThemeRadix accentColor="violet" radius="medium" appearance={uiSettings.isDarkMode ? "dark" : "light"}>
      {/* <ThemePanel /> */}
      <Outlet />
    </ThemeRadix>
  )
}
