import { useState } from "react";
import contextStore from "./ContextFile";
import { useNavigate } from 'react-router-dom'

const StateFile = (props) => {

    const URI = "http://localhost:5000"
    const navigate = useNavigate()

    const [error, setError] = useState({
        status: false,
        message: ""
    })

    const [currentUser, setCurrentUser] = useState({
        username: localStorage.getItem("collab-username") || "",
        email: localStorage.getItem("collab-email") || "",
        token: localStorage.getItem("collab-token") || ""
    })

    const loginUser = async ({ username, password }) => {
        const response = await fetch(`${URI}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })

        const json = await response.json()
        if (json.status) {
            // logged in 
            localStorage.setItem("collab-token", json.token)
            localStorage.setItem("collab-username", json.username)
            localStorage.setItem("collab-email", json.email)
            setCurrentUser({
                username: json.username,
                email: json.email,
                token: json.token
            })
            window.alert("logged in ")
            navigate("/dashboard")
        }
        else {
            // show error
            setError({
                status: true,
                message: json.message
            })
        }
    }

    const signupUser = async (username, email, password) => {
        const response = await fetch(`${URI}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password })
        })

        const json = await response.json()
        if (json.status) {
            // successfully registered <- direct to login 
            window.alert("Successfully Signed In")
            navigate('/login')
        }
        else {
            // show error
            setError({
                status: true,
                message: json.message
            })
        }
    }

    const createGroup = async (groupdata) => {
        const response = await fetch(`${URI}/group/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(groupdata)
        })
        const json = await response.json()
        if (json.status) {
            window.alert("Group Created")
            navigate("/dashboard")
        }
        else {
            setError({
                status: true,
                message: json.message
            })
        }
    }

    const joinGroup = async (groupcode) => {
        const response = await fetch(`${URI}/group/join`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: groupcode, username: currentUser.username })
        })
        const json = await response.json()
        if (json.status) {
            console.log(json.group)
            window.alert("Group Joined")
            navigate("/dashboard")
        }
        else {
            setError({
                status: true,
                message: json.message
            })
        }
    }

    // const getGroups = async () => {
    //     const response = await fetch(`${URI}/groups`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ token: currentUser.token })
    //     })
    //     const json = await response.json()
    //     if (json.status) {
    //         return json.groups
    //     }
    //     return [{ error: "No Groups Found" }]
    // }

    return (
        <contextStore.Provider
            value={{
                loginUser, signupUser, currentUser, error, createGroup, joinGroup
            }}
        >
            {props.children}
        </contextStore.Provider>
    )
}

export default StateFile