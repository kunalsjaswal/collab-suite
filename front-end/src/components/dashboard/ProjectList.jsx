import React, { useEffect, useState, } from 'react'
import { ProjectListDiv } from './Style'
import Item from './Item';
import { useNavigate } from 'react-router-dom'

const ProjectList = () => {

    const [groupdata, setGroupData] = useState([])
    const [role, setRole] = useState('All')

    useEffect(() => {
        const fetchGroups = async () => {
            const response = await fetch("http://localhost:5000/groups", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem("collab-token") })
            })
            const json = await response.json()
            setGroupData(json.groups)
        }
        fetchGroups()

    }, [])

    const navigate = useNavigate()
    const handleAddNew = () => {
        navigate("/projectsetup")
    }
    return (
        <ProjectListDiv>
            <div className='top'>
                <h2>GROUPS</h2>
                <div className='right'>
                    <button onClick={handleAddNew}>Add New</button>

                    <span>Filter: </span>
                    <select onChange={(e) => (
                        setRole(e.target.value)
                    )}>
                        <option value="All" >All</option>
                        <option value="Host" >Host</option>
                        <option value="Member">Member</option>
                    </select>
                </div>
            </div>

            <div className='project-items'>
                {
                    groupdata.map((item, index) => {
                        if (role === 'All') return <Item key={index} item={item} />
                        if (role === 'Host' && item.hostname === localStorage.getItem("collab-username")) return <Item key={index} item={item} />
                        if (role === 'Member' && item.members.find(member => member.username === localStorage.getItem("collab-username")))
                            return <Item key={index} item={item} />
                        return null
                    })
                }

            </div>
        </ProjectListDiv>
    )
}

export default ProjectList