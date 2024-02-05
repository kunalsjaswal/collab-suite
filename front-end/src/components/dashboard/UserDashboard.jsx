import React, { useState } from 'react'
import { DashboardContainer } from './Style'
import OptionsFile from './OptionsFile';
import ProjectList from './ProjectList';

const UserDashboard = () => {
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