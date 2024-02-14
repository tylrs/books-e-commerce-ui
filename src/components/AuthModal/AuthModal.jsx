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
    <div ref={ref} className="absolute flex flex-col gap-4 items-center border border-black rounded-lg right-0 top-8 py-10 px-20 z-10 bg-white">
      {isLoggedIn ? <p>{user.full_name}</p> : <p>Welcome!</p>}
      {isLoggedIn ? <LogoutButton handleClick={handleLogOut} /> : <LoginButton />}
    </div>
  )
}

export default AuthModal