import { useContext, useState } from "react"
import AuthModal from "../AuthModal/AuthModal"
import { AuthContext } from "../../contexts/AuthContext"

const Header = () => {
  const { user } = useContext(AuthContext)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const isLoggedIn = !!user

  const handleClick = () => {
    setShowAuthModal(!showAuthModal)
  }

  return <header className="flex relative justify-between p-8 border-b-black border-b">
    <h1 className="text-xl">Buy Books</h1>
    <div>
      <button onClick={handleClick}>
        {isLoggedIn ? <span>{user.full_name}</span> : <span>Log In</span>}
        {/* ICON HERE */}
      </button>
    </div>
    {showAuthModal && <AuthModal />}
  </header>
}

export default Header