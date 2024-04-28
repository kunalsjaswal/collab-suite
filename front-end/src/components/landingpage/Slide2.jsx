import React from 'react'
import { SlideTwo } from './Style'
import slide2_img from '../../images/slide2-img.png'
import Blob2 from '../../images/blobs/blob-2.png'
import Blob1 from "../../images/blobs/blob-1.png"

const Slide2 = () => {
    return (
        <SlideTwo data-aos="fade-left" data-aos-duration="500">
            <div className='left'>
                <img className="blob2" src={Blob2} alt="" />
                <img className='feature' src={slide2_img} alt="" />
            </div>
            <div className='right'>
                <img className='blob1' src={Blob1} alt="" />
                <p className='joinus'>
                    <h2>Join Us</h2>
                    <p>Join the thousands of teams worldwide who rely on Remote Team Collaboration Suite to collaborate effectively, no matter where they are. Experience the future of remote work with us today.</p>
                </p>
            </div>
        </SlideTwo>
    )
}

export default Slide2