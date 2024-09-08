import axios from "axios";
import { useEffect, useState } from "react"


const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    // Using axios to fetch the posts
    axios
      .get("http://nathansmithdeveloper.local/wp-json/wp/v2/pages")
      .then((res) => {
        // Saving the data to state
        setPosts(res.data);
      });
  }


  // Calling the function on page load
  useEffect(() => {
    fetchPosts()
  }, [])

  console.log('posts', posts)

  return (
    <>
      <h1 className="text-3xl font-bold">Nathan Smith</h1>
      <h2 className="text-2xl font-bold">Software Engineer</h2>

      <p className="text-3xl font-bold">I am a software engineer who loves to build things.</p>
    </>
  )
}

export default App
