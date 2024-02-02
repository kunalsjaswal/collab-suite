import React from 'react'
import JoinTeam from './JoinTeam'
import CreateTeam from "./CreateTeam"
import { useState } from 'react'
import { SetupFileDiv } from './Style'

const SetupFile = () => {

    const [selection, setSelection] = useState(0);
    const items = [JoinTeam, CreateTeam];
    const changeSelectionHandler=(num)=>{
        setSelection(num)
    }
    return(
        <SetupFileDiv>
            <div className='heading'>
                <button 
                    name='createBtn' 
                    className='btn-1'
                    style={{background:selection?"#C1A875":"white", color:selection?"white":"#C1A875"}}
                    onClick={()=>changeSelectionHandler(0)}>
                    <h2>Create New</h2>
                </button>
                <button 
                    name='joinBtn'
                    className='btn-2'
                    style={{background:!selection?"#C1A875":"white", color:!selection?"white":"#C1A875"}}
                    onClick={()=>changeSelectionHandler(1)}>
                   <h2>Join Another</h2> 
                </button>
            </div>

            <div className="content">
                {
                    selection == 0 ? <CreateTeam/> : <JoinTeam/>
                }
            </div>
        </SetupFileDiv>
    )
}

export default SetupFile