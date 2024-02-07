import { useState } from "react";
import contextStore from "./ContextFile";


const StateFile = (props) =>{
 
    const URI = "http://localhost:3000/"

    const [error, setError] = useState({
        status : false,
        message:""
    })
    const loginUser = async({username, password})=>{
        const response = await fetch(`${URI}/login`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })

        const json = await response.json()
        if(json.status){
            // logged in 
        }
        else{
            // show error
            setError({
                status: true,
                message: json.message
            })
        }
    }

    const signupUser = async ({username, email, password})=>{
        const response = await fetch(`${URI}/register`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password})
        })

        const json = await response.json()
        if(json.status){
            // successfully registered <- direct to login 
        }
        else{
            // show error
            setError({
                status: true,
                message: json.message
            })
        }
    }

    return (
        <contextStore.Provider
            value={{

            }}
        >
            {props.children}
        </contextStore.Provider>
    )
}

export default StateFile