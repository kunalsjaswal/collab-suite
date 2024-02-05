import React, { useState } from 'react'
import { ProjectListDiv } from './Style'
import Item from './Item';

const ProjectList = () => {

  return (
    <ProjectListDiv>
        <div className='top'>
            <h2>PROJECTS</h2>
            <div className='right'>
                <button>Add New</button>
                

                <span>Filter: </span>
                <select>
                    <option value="option1">All</option>
                    <option value="option2">Host</option>
                    <option value="option3">Member</option>
                </select>
            </div>
        </div>

        <div className='project-items'>
            <Item/>
            <Item/>
        </div>
    </ProjectListDiv>
  )
}

export default ProjectList