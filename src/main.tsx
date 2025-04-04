import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from "./App.tsx"
import "@radix-ui/themes/styles.css"
createRoot(document.getElementById("root")!).render(<App />)


  // <StrictMode>
  //   {/* <Theme accentColor="violet" grayColor="sand" radius="medium" appearance="dark"> */}
  //   {/* <ThemePanel /> */}
  //   <App />
  //   {/* </Theme> */}
  // </StrictMode>