import styled from 'styled-components';

export const SlideOne = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    user-select: none;
    position: relative;

    div.left-content{
        margin: 10%;
        button{
            border: 2px solid #C1A875;
            color: #ffffff;
            background-color: #C1A875;
            padding: 1% 2%;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: 200ms;

        }
        .blob1{
            
            width: 30%;
            position: absolute;
            top: 0;
            left:-10%;
            z-index: -1;
            transform: rotate(70deg);
        }
    }

    div.right-content{
        text-align: center;
        img{
            width: 100%;
        }
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 5%;

        div.left-content{
            margin: 5% 10%;
            text-align: center;
        }
        
    }
    @media (max-width: 550px) {
        div.left-content{
            margin: 5%;
        }
        
    }
`

export const SlideTwo = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 0% 10%;
    user-select: none;
    position: relative;

    .left{
        width: 50%;
        .feature{ width: 80%;
            }
        
        .blob2{
            width: 50%;
            position: absolute;
            top: -10%;
            left:-20%;
            z-index: -1;
            transform: rotate(90deg);
    }
    
    }
    .right{
        .blob1{
            width:30%;
            position: absolute;
            top: 0%;
            right:-15%;
            z-index: -1;
            transform: rotate(170deg);
        }
        width: 50%;
        display: flex;
        align-self: flex-end;
        flex-direction: column;
    }
`
export const SlideThree = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    padding: 0% 5%;
    position: relative;
    min-height: 500px;
    .heading{
        display: flex;
        align-self: flex-start;
    }
    .content{
        .blob1{
            width:30%;
            position: absolute;
            top: -15%;
            right:-10%;
            z-index: -1;
            transform: rotate(-110deg);
        }
    }
`

export const CarouselDiv = styled.div`
    overflow: hidden;
    div.file{
        border: 1px solid black;
    }

    div.next-btns{
        position: absolute;
        bottom: 0;
        height: 5%;
        margin-left: 2%;

        .radio-btn{
            cursor: pointer;
        }
    }

`