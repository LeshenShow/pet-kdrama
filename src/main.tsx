// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client"
import "./index.css"
import "@radix-ui/themes/styles.css"
import { Provider } from "react-redux"
import { store } from "./store"
import { RouterProvider } from "react-router-dom"
import { router } from "./app/router/router.tsx"
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </Provider>
)

// <StrictMode>
//   {/* <Theme accentColor="violet" grayColor="sand" radius="medium" appearance="dark"> */}
//   {/* <ThemePanel /> */}
//   <App />
//   {/* </Theme> */}
// </StrictMode>
