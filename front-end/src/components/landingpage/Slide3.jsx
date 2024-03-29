import React from 'react'
import { SlideThree } from './Style'
import Blob1 from "../../images/blobs/blob-1.png"


const Slide3 = () => {
    return (
        <SlideThree data-aos="fade-left" data-aos-duration="500">
            <div className='heading'>
                <h2>ABOUT US</h2>
            </div>
            <div className='content'>
                <img className='blob1' src={Blob1} alt="" />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sit cum dolore iste ea. Deserunt fugiat velit voluptatum perspiciatis quam, praesentium itaque soluta ad voluptatem explicabo delectus recusandae, fuga quisquam voluptates aut magnam commodi ipsa architecto accusantium. Praesentium facere itaque voluptate totam repudiandae, mollitia quia consequuntur, cum distinctio ex modi.
            </div>
        </SlideThree>
    )
}

export default Slide3