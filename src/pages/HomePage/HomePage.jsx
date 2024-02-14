import { useEffect } from "react"
import Header from "../../components/Header/Header"
import { useBooks } from "../../contexts/BooksContext"

const HomePage = () => {
  const { books } = useBooks()

  useEffect(() => {
    console.log("BOOKS>>", books)
  })

  return (
    <div className="flex flex-col">
      <Header />
    </div>
  )
}

export default HomePage
