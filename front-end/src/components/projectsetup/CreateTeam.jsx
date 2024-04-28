import React, { useEffect } from 'react'
import { CreateTeamDiv } from './Style'
import { useState } from 'react'
import contextStore from '../../context/ContextFile';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateTeam = ({ selection, setSelection }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("collab-token")) {
            navigate("/")
        }
    }, [navigate])

    const { createGroup } = useContext(contextStore)
    const [groupData, setGroupData] = useState({
        name: "",
        description: "",
        model: "",
        hostname: localStorage.getItem("collab-username") || ""
    })

    const handleCreateGroup = async (e) => {
        e.preventDefault()
        const { name, description, model } = groupData;
        if (name.length === 0 || description.length === 0 || model.length === 0) {
            window.alert("Please enter all fields")
            return
        }
        await createGroup(groupData)
    }
    return (

        <CreateTeamDiv data-aos="fade" data-aos-duration="500">
            <div className='container'>
                <input type="text" placeholder="Group Name" onChange={(e) => (
                    setGroupData({
                        ...groupData,
                        name: e.target.value
                    })
                )} />
                <select className='select-input' onChange={(e) => (
                    setGroupData({
                        ...groupData,
                        model: e.target.value
                    })
                )}>
                    <option value="" disabled selected hidden>Choose SDLC Model</option>
                    <option value="Waterfall">Waterfall</option>
                    <option value="Aglie">Agile</option>
                    <option value="Spiral">Spiral</option>
                    <option value="Iterative">Iterative</option>
                </select>
                <textarea placeholder='Description' className="tx-area" rows="5" onChange={(e) => (
                    setGroupData({
                        ...groupData,
                        description: e.target.value
                    })

                )}></textarea>
                <br />
                <button type="submit" onClick={handleCreateGroup}>Create</button>
            </div>
        </CreateTeamDiv >
    )
}

export default CreateTeam