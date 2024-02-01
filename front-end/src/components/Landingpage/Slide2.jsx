import React from 'react'
import { SlideTwo } from './Style'
import slide2_img from '../../images/slide2-img.png'

const Slide2 = () => {
    return (
        <SlideTwo>
            <div className='left'>
                <img src={slide2_img} alt="" />
            </div>
            <div className='right'>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos architecto nulla, earum cumque minus eaque magni sed. Blanditiis voluptatem nesciunt corporis, ut labore illo!</p>
                </div>
            </div>
        </SlideTwo>
    )
}

export default Slide2