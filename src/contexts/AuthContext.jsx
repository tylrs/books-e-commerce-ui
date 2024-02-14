import { createContext, useContext } from "react"
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

export const useAuth = () => {
  return useContext(AuthContext)
}

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}
