import React from 'react'
import Blog from './Blog'

export default function Blogs({blogs}) {
 
  
  return (
    <div  id='page'>
      <h2 className='px-3'>Blogs</h2>
      {blogs.length <1 && <p>Sorry. No blogs available today :3</p>}
    <div className='container row'>
      {
        blogs && blogs.map((blog)=>(
          <Blog key ={blog.id} blogs={blog} />
        ))
      }
      </div>  

    </div>
  )
}
