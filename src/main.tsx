import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from "./App.tsx"
import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from "@radix-ui/themes"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme accentColor="violet" grayColor="sand" radius="medium">
      <ThemePanel />
      <App />
    </Theme>
  </StrictMode>
)


