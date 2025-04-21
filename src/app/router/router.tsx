// router.tsx
import { createBrowserRouter, createHashRouter } from "react-router-dom"
// import { Page404 } from "./common/components/Page404"
import { App } from "../../App"
import { LoginPage } from "../../features/auth/components/login-page"
import { MainPage } from "../../common/components/main-page/main-page"
import { FilmPage } from "../../common/components/film-page/film-page"
import { ErrorFallback } from "../../common/components/error-page/error-fallback"

export const Path = {
  Login: "login",
  Main: "/",
  Film: "film/:id",
} as const
export const router = createHashRouter(
  [
    // {
    //   path: Path.Login,
    //   element: <LoginPage />,
    // },
    {
      path: Path.Main,
      element: <App />,
      errorElement: <ErrorFallback />,
      children: [
        {
          // path: Path.Main,
          index: true,
          element: <MainPage />,
        },
        {
          path: Path.Film,
          element: <FilmPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]
  // { basename: "/pet-kdrama/" }
)
