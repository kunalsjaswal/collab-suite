import React from 'react'
import { OptionFileDiv } from './Style'

const OptionsFile = () => {
  return (
    <OptionFileDiv>
          <div className='profile-section'>
              <div className='head'>
                  <h2 className='profile-logo'>KSJ</h2>
                  <h2>DASHBOARD</h2>
              </div>
              <h3>Email:  abc@gmail.com</h3>
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