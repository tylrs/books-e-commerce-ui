import { useEffect } from "react"
import { mockJWT } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const OAuthCallback = () => {
  const navigate = useNavigate()
  const { setToken } = useAuth()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const { state } = Object.fromEntries(queryParams.entries());

    const prevRandomState = sessionStorage.getItem("state")
    if (prevRandomState === state) {
      const token = import.meta.env.VITE_MOCK_BACKEND === "true" ? mockJWT : "PLACEHOLDERFORREALTOKEN"

      setToken(token)
      navigate("/")
    }

  }, [])

  return <p>Loading</p>
}

export default OAuthCallback