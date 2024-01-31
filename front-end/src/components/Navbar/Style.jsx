import styled from 'styled-components';

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 4%;
    border: 1px solid black;
    
    h2{
        color:#487FF8;
    }  
    div{
        display: flex;
        justify-content: center;
        align-items: center;

    }
    button.login{
       margin:5%;
       background-color: #487FF8;
       color: white;
       padding:10px 20px;
       border: none;
       border-radius: 5px;
    }
    button.signup{
       margin:5%;
       background-color: #487FF8;
       color: white;
       padding:10px 20px;
       border: none;
       border-radius: 5px;

    }
`
