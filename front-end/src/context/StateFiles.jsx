import { useState } from "react";
import contextStore from "./ContextFile";
import {useNavigate} from 'react-router-dom'

const StateFile = (props) =>{
 
    const URI = "http://localhost:5000"
    const navigate = useNavigate()

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
            localStorage.setItem("collab-token", json.token)
            window.alert("logged in ")
            navigate("/dashboard")
        }
        else{
            // show error
            setError({
                status: true,
                message: json.message
            })
        }
    }

    const signupUser = async (username, email, password)=>{
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
            window.alert("Successfully Signed In")
            navigate('/login')
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
                loginUser, signupUser
            }}
        >
            {props.children}
        </contextStore.Provider>
    )
}

export default StateFile