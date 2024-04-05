import React from 'react'
import { SlideOne } from './Style'
import slide1_img from '../../images/slide1-img.png'
import { NavLink } from 'react-router-dom'
import Blob1 from "../../images/blobs/blob-1.png"

const Slide1 = () => {
    return (
        <SlideOne data-aos="fade-left" data-aos-duration="500">
            <div className='left-content'>
                <img className='blob1' src={Blob1} alt="" />
                <h1>WELCOME TO THE REMOTE TEAM COLLABORATION SUITE</h1>
                <p>"Connect, collaborate, conquer. Experience the power of our Suite."</p>
                <NavLink style={{ textDecoration: "none", color: "white" }} to='login'>
                    <button>JOIN US NOW</button>
                </NavLink>
            </div>
            <div className='right-content'>
                <img src={slide1_img} alt="" className='slide1-img' />
            </div>
        </SlideOne>
    )
}

export default Slide1