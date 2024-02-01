import styled from 'styled-components';

export const SlideOne = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    /* border: 2px solid black; */


    div.left-content{
        margin: 10%;
        button{
            border: 2px solid #C1A875;
            color: #444655;
            background-color: #C1A875;
            padding: 1% 2%;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: 200ms;

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
