import React from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'


const Carousel = () => {
    const items = [<Slide1/>, <Slide2/>, <Slide3/>]
    return (
    <div>
        {items[0]}
    </div>
  )
}

export default Carousel