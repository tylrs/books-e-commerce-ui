import { RouterProvider } from "react-router-dom"
import "./App.css"
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
