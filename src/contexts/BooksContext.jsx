import { createContext, useContext, useEffect, useState } from "react";

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const response = await fetch("https://gutendex.com/books/")
      if (!response.ok) {
        throw Error("Failed Fetch")
      }

      const data = await response.json()
      return data
    } catch (error) {

    }
  }

  useEffect(() => {
    const bookData = getBooks()

    setBooks(bookData)
  }, [])

  return <BooksContext.Provider value={books}>
    {children}
  </BooksContext.Provider>
}

export const useBooks = () => useContext(BooksContext)