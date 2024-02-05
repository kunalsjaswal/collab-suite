import React, { useState } from 'react'
import { ItemDiv } from './Style'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ShowMore from './ShowMore';

const Item = () => {

    const [active, setActive] = useState(false)

    const borderStyleOpen = {
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px"
    }
    const borderStyleClose = {
        borderRadius: "15px"
    }

  return (
    <ItemDiv>
        <div className='item'>
            <div className='itemtop' style={active? borderStyleOpen:borderStyleClose}>
                {
                    active ? 
                    <ExpandCircleDownIcon fontSize='large'
                        className='arrow-up-icon'
                        onClick={() => {setActive(!active)}}
                        />
                    :   
                    <ExpandCircleDownIcon fontSize='large' 
                        style={{cursor:"pointer"}}
                        onClick={() => {setActive(!active)}}/>
                }
                <h3>Project 1</h3>
                <h3>SDLC Name</h3>
                <h3>Date</h3>
            </div>
            {active && <ShowMore/>}
        </div>
    </ItemDiv>
  )
}

export default Item