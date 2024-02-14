import { useContext, useState } from "react"
import AuthModal from "../AuthModal/AuthModal"
import { AuthContext } from "../../contexts/AuthContext"
import DownCaretIcon from "../../assets/svgs/downCaret.svg?react"
import DefaultUserIcon from "../../assets/svgs/defaultUserIcon.svg?react"

const Header = () => {
  const { user } = useContext(AuthContext)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const isLoggedIn = !!user

  const handleClick = (e) => {
    e.stopPropagation()
    setShowAuthModal(!showAuthModal)
  }

  return <header className="flex justify-between p-8 border-b-black border-b">
    <h1 className="text-xl">Buy Books</h1>
    <div className="relative">
      <button className="flex gap-2" onClick={handleClick}>
        <DefaultUserIcon className="w-6 h-6 fill-black" />
        {isLoggedIn ? <span>{user.full_name}</span> : <span>Log In</span>}
        <DownCaretIcon className={`w-6 h-6 fill-black ${showAuthModal && "rotate-180"}`} />
      </button>
      {showAuthModal && <AuthModal setShowAuthModal={setShowAuthModal} />}
    </div>
  </header>
}

export default Header