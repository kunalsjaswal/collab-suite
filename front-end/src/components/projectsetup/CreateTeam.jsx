import React from 'react'
import { CreateTeamDiv } from './Style'

const CreateTeam = ({ selection, setSelection }) => {

    return (

        <CreateTeamDiv data-aos="fade"  data-aos-duration="500">
            <div className='container'>
                <input type="text" placeholder="Group Name" />
                <select className='select-input'>
                    <option value="" disabled selected hidden>Choose SDLC Model</option>
                    <option value="option1">Waterfall</option>
                    <option value="option2">Agile</option>
                    <option value="option3">Option 3</option>
                </select>
                <textarea placeholder='Description' className="tx-area" rows="5"></textarea>
                <br />
                <button type="submit">Create</button>
            </div>
        </CreateTeamDiv >
    )
}

export default CreateTeam