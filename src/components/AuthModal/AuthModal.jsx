import { AuthContext } from "../../contexts/AuthContext"
import useOutsideClickAction from "../../hooks/useOutsideClickAction"
import LoginButton from "../LoginButton/LoginButton"
import { useContext, useRef } from "react"

const LogoutButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      Log Out
    </button>
  )
}

const AuthModal = ({ setShowAuthModal }) => {
  const { user, handleLogOut } = useContext(AuthContext)
  const isLoggedIn = !!user
  const ref = useRef(null)

  const closeModal = () => {
    setShowAuthModal(false)
  }

  useOutsideClickAction(ref, closeModal)

  return (
    <div ref={ref} className="absolute border border-black right-0 top-0 p-10 z-10 bg-slate-200">
      {isLoggedIn && <p>{user.full_name}</p>}
      {isLoggedIn ? <LogoutButton handleClick={handleLogOut} /> : <LoginButton />}
    </div>
  )
}

export default AuthModal