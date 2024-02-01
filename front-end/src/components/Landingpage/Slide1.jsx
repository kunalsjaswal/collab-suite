import React from 'react'
import { SlideOne } from './Style'
import slide1_img from '../../images/slide1-img.png'

const Slide1 = () => {
    return (
        <SlideOne data-aos="fade-left"  data-aos-duration="500">
            <div className='left-content'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore?</h2>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ratione voluptas laudantium quia, dolorem a ipsam incidunt perferendis libero?</p>
                <button>JOIN US NOW</button>
            </div>
            <div className='right-content'>
                <img src={slide1_img} alt="" className='slide1-img'/>
            </div>
        </SlideOne>
    )
}

export default Slide1