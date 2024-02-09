import { useEffect } from "react"
import { mockJWT } from "../../constants";
import { useNavigate } from "react-router-dom";

const OAuthCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const { state, code } = Object.fromEntries(queryParams.entries());
    const prevRandomState = sessionStorage.getItem("state")
    if (prevRandomState === state) {
      const token = import.meta.env.VITE_MOCK_BACKEND === true ? mockJWT : "PLACEHOLDERFORREALTOKEN"
      localStorage.setItem("accountToken", mockJWT)
      navigate("/")
    }

  }, [])

  return <p>Loading</p>
}

export default OAuthCallback