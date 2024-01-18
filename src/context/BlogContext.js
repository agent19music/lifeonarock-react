import {createContext, useState, useEffect} from "react"
import Swal from "sweetalert2"

export const BlogContext = createContext();



export default function BlogProvider({children}) 
{
    const [blogs, setBlogs] = useState([])
    const [onchange, setOnchange] = useState(false)

    // add blog
    function addBlogs(title, body, tags)
    {
        fetch("/blogs",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, content })

        }
        )
        .then(res => res.json())
        .then(response => {
            
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.success,
            showConfirmButton: false,
            timer: 1500
            });
            setOnchange(!onchange)


        })
    }

        // update likes in blogs
        function updateBlogLikes(id)
        {
            fetch(`/update_likes/${id}`,{
                method: "PUT",             
    
            }
            )
            .then(res => res.json())
            .then(response => {r
                setOnchange(!onchange)
            })
        }


    // fetch blogs
    useEffect(()=>{
        fetch("/blogs")
        .then(res => res.json())
        .then(response => {
            setBlogs(response)
        })

    }, [onchange])



    // context data
    const contextData = {
        addBlogs,
        blogs,
        updateBlogLikes

        // pass all your variables and function
    }

  return (
    <BlogContext.Provider value={contextData} >
       {children}
    </BlogContext.Provider>
  )
}

 