// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App.tsx"
import "@radix-ui/themes/styles.css"
import { Provider } from "react-redux"
import { store } from "./store"
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// <StrictMode>
//   {/* <Theme accentColor="violet" grayColor="sand" radius="medium" appearance="dark"> */}
//   {/* <ThemePanel /> */}
//   <App />
//   {/* </Theme> */}
// </StrictMode>
