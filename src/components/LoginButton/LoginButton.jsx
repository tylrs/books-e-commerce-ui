import GoogleIcon from "../../assets/svgs/googleIcon.svg?react"
import { generateRandomState } from "../../utils/utils"

const createAuthProviderURL = () => {
  const randomState = generateRandomState()
  sessionStorage.setItem("state", randomState)

  const authProviderURL = new URL("https://accounts.google.com/o/oauth2/v2/auth")
  const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const params = {
    client_id,
    redirect_uri: "http://localhost:5173/oauth/callback",
    scope: "email profile",
    state: randomState,
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
  }
  const searchParams = new URLSearchParams(params)
  authProviderURL.search = searchParams
}

const LoginButton = () => {
  const handleLogin = () => {
    const authProviderURL = createAuthProviderURL()

    location.replace(authProviderURL)
  }

  return (
    <button className="flex items-center gap-4 border border-black rounded-lg py-2 px-6 hover:bg-neutral-100" onClick={handleLogin}>
      <GoogleIcon className="w-6 h-6" />
      <span className="whitespace-nowrap">Log in with Google</span>
    </button>
  )
}

export default LoginButton