import React, { useState } from 'react'
import { DashboardContainer } from './Style'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const UserDashboard = () => {
    const [active, setActive] = useState(false)
    return (
        <DashboardContainer>
            <div className='left'>
                <div className='top'>
                    <div className='head'>
                        <h3>img</h3>
                        <h3>Dashboard</h3>
                    </div>
                    <div className='body'>
                        <p>Email</p>
                    </div>
                </div>
                <div className='bottom'>
                    <h3>Settings</h3>
                    <p>Change password</p>
                    <p>Change username</p>
                </div>
            </div>
            <div className='right'>
                <div className='top'>
                    <div className='left'>
                        <h2>
                            Projects
                        </h2>
                    </div>
                    <div className='right'>
                        <button>
                            Add New
                        </button>
                        <h2>Filter</h2>
                        <select>
                            <option value="option1">All</option>
                            <option value="option2">Host</option>
                            <option value="option3">Member</option>
                        </select>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='item'>
                        <div className='itemtop'>
                            <ExpandCircleDownIcon fontSize='large' onClick={() => {
                                console.log("clicked")
                                return setActive(!active)
                            }} />
                            <h3>Project 1</h3>
                            <h3>SDLC Name</h3>
                            <h3>Date</h3>
                        </div>
                        {active && <div className='itembottom'>
                            <div className='team'>
                                <h3>Team Members</h3>
                                <p>Member 1</p>
                                <p>Member 2</p>
                            </div>
                            <div className='desc'>
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odit, modi nesciunt odio recusandae fugit numquam officia voluptatibus dolores cupiditate.</p>
                            </div>
                        </div>}
                    </div>

                </div>
            </div>
        </DashboardContainer>
    )
}

export default UserDashboard