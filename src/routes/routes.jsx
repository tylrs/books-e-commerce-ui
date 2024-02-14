import HomePage from "../pages/HomePage/HomePage"
import { createBrowserRouter } from "react-router-dom"
import OAuthCallback from "../components/OauthCallback/OauthCallback"
import { BooksContextProvider } from "../contexts/BooksContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksContextProvider>
      <HomePage />
    </BooksContextProvider>
  },
  {
    path: "/oauth/callback",
    element: <OAuthCallback />
  },
])

export default router