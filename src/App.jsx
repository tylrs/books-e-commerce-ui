import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"
import { AuthContextProvider } from "./contexts/AuthContext"

const App = () => {

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
