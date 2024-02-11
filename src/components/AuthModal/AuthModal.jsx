import { AuthContext } from "../../contexts/AuthContext"
import LoginButton from "../LoginButton/LoginButton"
import { useContext } from "react"

const AuthModal = () => {
  const { user } = useContext(AuthContext)
  const isLoggedIn = !!user

  return (
    <div className="absolute border border-black right-0 top-0 p-10 z-10 bg-slate-200">
      {isLoggedIn && <p>{user.full_name}</p>}
      {isLoggedIn ? <p>Logged In</p> : <LoginButton />}
    </div>
  )
}

export default AuthModal