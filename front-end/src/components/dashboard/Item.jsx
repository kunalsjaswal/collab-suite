import React, { useState } from 'react'
import { ItemDiv } from './Style'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ShowMore from './ShowMore';

const Item = ({ item }) => {

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

                <div className='itemtop' style={active ? borderStyleOpen : borderStyleClose}>
                    {
                        active ?
                            <ExpandCircleDownIcon fontSize='large'
                                className='arrow-up-icon'
                                onClick={() => { setActive(!active) }}
                            />
                            :
                            <ExpandCircleDownIcon fontSize='large'
                                style={{ cursor: "pointer" }}
                                onClick={() => { setActive(!active) }} />
                    }
                    <h3>{item.name}</h3>
                    <h3>{item.model}</h3>
                    <h3>{item.members.length}</h3>
                </div>
                {active && <ShowMore item={item} />}
            </div>
        </ItemDiv>
    )
}

export default Item