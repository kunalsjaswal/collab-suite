import React, { useEffect, useState, useContext } from 'react'
import { JoinTeamDiv } from './Style'
import { useNavigate } from 'react-router-dom';
import contextStore from '../../context/ContextFile';

const JoinTeam = () => {
    const { joinGroup } = useContext(contextStore)
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("collab-token")) {
            navigate("/")
        }
    }, [navigate])

    const [joinCode, setJoinCode] = useState("")

    async function handleTeamJoin(e) {
        e.preventDefault()
        if (joinCode.length === 0) {
            window.alert("Please enter group code")
            return
        }
        await joinGroup(joinCode)
    }
    return (
        <JoinTeamDiv data-aos="fade" data-aos-duration="500">
            <div className='container'>
                <form action="">
                    <input type="text" placeholder="Enter Group Code" onChange={(e) => (
                        setJoinCode(e.target.value)
                    )} />
                    <button type="submit" onClick={handleTeamJoin}>Join</button>
                </form>
            </div>
        </JoinTeamDiv>

    )
}

export default JoinTeam