import React from 'react'
import { OptionFileDiv } from './Style'
import { useContext } from 'react'
import contextStore from '../../context/ContextFile'
import { MdOutlineMail } from "react-icons/md";

const OptionsFile = () => {
  const { currentUser } = useContext(contextStore)
  return (
    <OptionFileDiv>
      <div className='profile-section'>
        <div className='head'>
          <h2 className='profile-logo'>
            {currentUser.username.charAt(0).toUpperCase() + currentUser.username.charAt(currentUser.username.length - 1).toUpperCase()}
          </h2>
          <h2>DASHBOARD</h2>
        </div>
        <div className='email'>
          <MdOutlineMail size={30} />
          {currentUser.email}</div>
      </div>

      <div className='setting-section'>
        <h2>SETTINGS</h2>
        <ul>
          <li>Change Password</li>
          <li>Change Username</li>
        </ul>
      </div>

      <div className='messages'>
        <h2>Important Messages</h2>
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
        </ul>
      </div>
    </OptionFileDiv>
  )
}

export default OptionsFile