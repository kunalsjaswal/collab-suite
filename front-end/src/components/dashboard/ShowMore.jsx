import React from 'react'
import { ShowMoreDiv } from './Style'

const ShowMore = () => {
  return (
    <ShowMoreDiv data-aos="fade"  data-aos-duration="200">
        <div className='team'>
            <h3>Team Members</h3>
            <p>Member 1</p>
            <p>Member 2</p>
        </div>
        <div className='desc'>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odit, modi nesciunt odio recusandae fugit numquam officia voluptatibus dolores cupiditate.</p>
        </div>

    </ShowMoreDiv>
  )
}

export default ShowMore