import { useContext } from "react"
import LoginButton from "../../components/LoginButton/LoginButton"
import { AuthContext } from "../../contexts/AuthContext"

const HomePage = () => {
  const { user, setToken } = useContext(AuthContext)
  const isLoggedIn = !!user

  const handleClick = () => {
    setToken("accountToken", "something else")
  }

  return (
    <div className="flex flex-col">
      <h1>Hello World</h1>
      {isLoggedIn && <p>{user.full_name}</p>}
      {isLoggedIn ? <p>Logged In</p> : <LoginButton />}
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  )
}

export default HomePage
