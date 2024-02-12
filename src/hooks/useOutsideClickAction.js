import { useEffect } from "react"

const useOutsideClickAction = (ref, callback) => {
  useEffect(() => {
    const eventListener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    document.addEventListener("click", (e) => eventListener(e))
    return document.removeEventListener("click", (e) => eventListener(e))
  }, [ref])
}

export default useOutsideClickAction
