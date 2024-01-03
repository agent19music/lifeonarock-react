import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'

export default function Blog({blogs}) {
  function deleteBlog (){
    fetch('',{
      method: 'DELETE'
    })
    .then((res)=>(res.json()))
    .then ((res)=>{
      console.log(res)
      Swal.fire(
        'Blog Deleted!',
        '',
        'success'
      )
    })
  }
  return (
    <div className='col-md-3 mb-5'>
      <Link to={`/blogs/${blogs.id}`}><img src={blogs.poster} className='img-fluid'alt='loading'/></Link>
        <div>
        <h6>{blogs.title}</h6>
        </div>  
    </div>
  )
}
