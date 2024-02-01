import styled from 'styled-components';

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 2%;

    div.icon-name{
        display: flex;
        align-items: center;
        img.favicon-img{
            width: 10%;
        }
        h2{
            margin-left: 1%;
            color:#487FF8;
        }  
    }

    div.btn-group{
        width: 15%;
        display: grid;
        grid-template-columns: 45% 45%;
        gap: 5%;
    }
    button{
        width: 90%;
        color: white;
        background-color: #487FF8;
        border: none;
        border-radius: 5px;
        padding: 8% 0%; 
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
    }
    button:hover{
        color: black;
    }   

    @media (max-width: 900px) {
        div.btn-group{
            width: 30%;
        }
    }
    @media (max-width: 550px) {
        div.btn-group{
            width: 50%;
        }
    }
`
