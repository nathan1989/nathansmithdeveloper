import { useEffect, useState } from "react"
import { fetchPages } from "./utils/fetchPages";
import { WordPressPage } from "./utils/fetchPages.types";
import { fetchPage } from "./utils/fetchPage";


const App = () => {
  const [intro, setIntro] = useState<WordPressPage>()
  const [workList, setWorkList] = useState<WordPressPage[]>([])
  const [skills, setSkills] = useState<WordPressPage[]>([])

  const fetchIntro = async () => {
    const page = await fetchPage(31)
    setIntro(page)
  }

  const fetchData = async () => {
    setWorkList(await fetchPages({parent: 29}))
    setSkills(await fetchPages({parent: 33}))
  }


  // Calling the function on page load
  useEffect(() => {
    fetchIntro();
    fetchData()
  }, [])

  console.log('workList', workList)

  return (
    <>
      <h1 className="text-4xl font-bold mb-1">Nathan Smith</h1>
      <h2 className="text-3xl font-bold mb-3">Software Engineer</h2>

      {intro?.content.rendered && <div className="mb-2" dangerouslySetInnerHTML={{__html: intro.content.rendered}} />}

      <h3 className="text-2xl font-bold mb-2">Work history</h3>
      {workList.map((page) => (
        <div key={page.id}>
          <h4 className="text-1xl font-bold mb-1">{page.title.rendered}</h4>
          {page?.content.rendered && <div className="mb-2" dangerouslySetInnerHTML={{__html: page.content.rendered}} />}
        </div>
      ))}

      <h3 className="text-2xl font-bold mb-2">Skills and experience</h3>
      {skills.map((page) => (
        <div key={page.id}>
          <h4 className="text-1xl font-bold mb-1">{page.title.rendered}</h4>
          {page?.content.rendered && <p className="mb-2" dangerouslySetInnerHTML={{__html: page.content.rendered}} />}
        </div>
      ))}
    </>
  )
}

export default App
