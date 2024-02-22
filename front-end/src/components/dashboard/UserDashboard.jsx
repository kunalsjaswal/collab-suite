import React, { useEffect, useState } from 'react'
import { DashboardContainer } from './Style'
import OptionsFile from './OptionsFile';
import ProjectList from './ProjectList';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate()
    useEffect(()=>{

        if(!localStorage.getItem("collab-token")){
            navigate("/")
        }
    },[])
    return (
        <DashboardContainer>
            <div className='left'>
                <OptionsFile/>
            </div>
            <div className='right'>
                <ProjectList/>
            </div>
        </DashboardContainer>
    )
}

export default UserDashboard