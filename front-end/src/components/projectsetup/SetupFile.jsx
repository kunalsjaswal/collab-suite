import React from 'react'
import JoinTeam from './JoinTeam'
import CreateTeam from "./CreateTeam"
import { useState } from 'react'

const SetupFile = () => {
    const [selection, setSelection] = useState("create")
    console.log(selection)
    if (selection === "create") {
        return <CreateTeam selection={selection} setSelection={setSelection} />
    }
    return <JoinTeam selection={selection} setSelection={setSelection} />

}

export default SetupFile