import React, { useEffect, useState } from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import { CarouselDiv } from './Style'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const CarouselFile = () => {
    const items = [<Slide1 />, <Slide2 />, <Slide3 />]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setIndex(prev => (prev + 1) % 3)
        }, 5000);
        console.log("timeout")
    }, [])

    const onSliderClickHandler = (indx) => {
        setIndex(indx);
    }
    return (
        <CarouselDiv>
            {items[index]}

            <div className="next-btns">
                {
                    index === 0 ?
                        <RadioButtonCheckedIcon color='primary' className='radio-btn' /> :
                        <RadioButtonUncheckedIcon
                            color='primary'
                            className='radio-btn'
                            onClick={() => onSliderClickHandler(0)}
                        />
                }
                {
                    index === 1 ?
                        <RadioButtonCheckedIcon color='primary' className='radio-btn' /> :
                        <RadioButtonUncheckedIcon
                            color='primary'
                            className='radio-btn'
                            onClick={() => onSliderClickHandler(1)}
                        />
                }
                {
                    index === 2 ?
                        <RadioButtonCheckedIcon color='primary' className='radio-btn' /> :
                        <RadioButtonUncheckedIcon
                            color='primary'
                            className='radio-btn'
                            onClick={() => onSliderClickHandler(2)}
                        />
                }
            </div>

        </CarouselDiv>


    )
}

export default CarouselFile