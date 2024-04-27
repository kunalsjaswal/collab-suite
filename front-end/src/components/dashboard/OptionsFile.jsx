import React from 'react'
import { OptionFileDiv } from './Style'
import { useContext } from 'react'
import contextStore from '../../context/ContextFile'

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
        <h3>Email:  {currentUser.email}</h3>
      </div>

      <div className='setting-section'>
        <h2>SETTINGS</h2>
        <ul>
          <li>Change password</li>
          <li>Change username</li>
        </ul>
      </div>
    </OptionFileDiv>
  )
}

export default OptionsFile