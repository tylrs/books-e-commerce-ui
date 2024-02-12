import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("accountToken")

  const user = token
    ? parseJwt(token)
    : null

  const handleLogOut = () => {
    setToken("CLEARLOCALSTORAGE")
  }

  const contextValue = {
    token,
    user,
    setToken,
    handleLogOut
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}
