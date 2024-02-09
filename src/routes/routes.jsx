import HomePage from "../pages/HomePage/HomePage"
import { createBrowserRouter } from "react-router-dom"
import OAuthCallback from "../components/OauthCallback/OauthCallback"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/oauth/callback",
    element: <OAuthCallback />
  },
])

export default router