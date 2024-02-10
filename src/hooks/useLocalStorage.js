/* 
  take a keyName as a param
  return item, setItem

  tests
    1) return initial value on component mount
    2) return and use setter
    3) should be able to do this for more complex JSON
    4) should initialize state from localstorage
    5) should set localstorage and state at the same time
    6) state updates should trigger localstorage updates
  
    later
      should be able to take an initial value
*/

import { useEffect, useState } from "react"

export const useLocalStorage = (key) => {
  const localStorageItem = JSON.parse(localStorage.getItem(key))
  const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const [state, setState] = useState(localStorageItem)

  useEffect(() => {
    setLocalStorageItem(key, state)
  }, [state])

  return [state, setState]
}
