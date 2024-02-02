import React from 'react'
import JoinTeam from './JoinTeam'
import CreateTeam from "./CreateTeam"
import { useState } from 'react'

const SetupFile = () => {
    const [create, setCreate] = useState(true)
    if (create) {
        return <CreateTeam create={create} setCreate={setCreate} />
    }
    return <JoinTeam create={create} setCreate={setCreate} />

}

export default SetupFile