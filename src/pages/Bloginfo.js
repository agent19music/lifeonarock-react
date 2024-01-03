import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Bloginfo() {
    const {id} = useParams();
    const [blog, SetBlog] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:6001/blogs/${id}`)
        .then((res) => res.json())
        .then((res)=> SetBlog(res))
        .catch((error) => console.error(error));
        
  }, [id]);
  console.log(blog);

  return (
    <div id='page'>Bloginfo
    </div>
  )
}

