import { useEffect, useState } from "react"
import { fetchPages } from "./utils/fetchPages";
import { WordPressPage } from "./utils/fetchPages.types";


const App = () => {
  const [workList, setWorkList] = useState<WordPressPage[]>([])


  const fetchWorkHistory = async () => {
    const pages = await fetchPages()
    setWorkList(pages)
  }


  // Calling the function on page load
  useEffect(() => {
    fetchWorkHistory()
  }, [])

  console.log('workList', workList)

  return (
    <>
      <h1 className="text-3xl font-bold">Nathan Smith</h1>
      <h2 className="text-2xl font-bold">Software Engineer</h2>

      <p className="text-3xl font-bold">I am a software engineer who loves to build things.</p>

      <h3>Work history</h3>
      {workList.map((page) => (
        <div key={page.id}>
          <h4>{page.title.rendered}</h4>
        </div>
      ))}
    </>
  )
}

export default App
