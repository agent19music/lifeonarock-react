import {createContext, useState, useEffect} from "react"
import Swal from "sweetalert2"

export const AuthorContext = createContext();



export default function AuthorProvider({children}) 
{
    const [onchange, setOnchange] = useState(false)


    // add user
    function addAuthor(name,email)
    {
        fetch("/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name,email })

        }
        )
        .then(res => res.json())
        .then(response => {
            
            if (response.success)
            {
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.success,
                showConfirmButton: false,
                timer: 1500
                });
                setOnchange(!onchange)
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: response.error,
                    showConfirmButton: false,
                    timer: 1500
                    });
                    setOnchange(!onchange)
            }


        })
    }


    // context data
    const contextData = {
        addAuthor,

        // pass all your variables and function
    }

  return (
    <AuthorContext.Provider value={contextData} >
       {children}
    </AuthorContext.Provider>
  )
}

 