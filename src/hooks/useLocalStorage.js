import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  const localStorageItem = JSON.parse(localStorage.getItem(key)) || initialValue
  const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const [state, setState] = useState(localStorageItem)

  useEffect(() => {
    if (state === "CLEARLOCALSTORAGE") {
      localStorage.removeItem(key)
    } else if (state !== undefined) {
      setLocalStorageItem(key, state)
    }
  }, [state])

  return [state, setState]
}
