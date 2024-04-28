import React from 'react'
import { ShowMoreDiv } from './Style'

const ShowMore = ({ item }) => {
  const host = {
    backgroundColor: '#C1A875 ',
    color: "white"
  }
  return (
    <ShowMoreDiv data-aos="fade" data-aos-duration="200">


      <div className='team'>
        <h3>Team Members</h3>
        {
          item.members.map((member, index) => {
            return <p key={index} style={index === 0 ? host : null} >{member.username}</p>
          })

        }
      </div>
      <div className='desc'>
        <div className='description'>
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
        <div className='group'>
          <h3>Group Code</h3>
          <p>{item._id}</p>
        </div>
      </div>


    </ShowMoreDiv>
  )
}

export default ShowMore