import React,{useEffect,useState} from 'react'
import Blog from './Blog'

export default function Blogs() {
  const [blogs, setBlogs] = useState({})
  useEffect(()=>{
    fetch ('http://localhost:6001/blogs')
    .then((res) => res.json())
    .then((res)=> setBlogs(res) )
  },[])
  return (
    <div className='container p-3'>
      <h2>Blogs</h2>
      {blogs.length <1 && <p>'Sorry. No blogs available today :3</p>}
    <div className='co'>
      {
        blogs && blogs.map((blog)=>(
          <Blog key ={blog.id} blogs={blog}/>
        ))
      }
      </div>  

    </div>
  )
}
