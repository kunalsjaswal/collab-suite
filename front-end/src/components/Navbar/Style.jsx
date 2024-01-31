import styled from 'styled-components';

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 4%;
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
       padding:15px 40px;
       border: none;
       border-radius: 8px;
       font-weight:700;
       font-size:1rem;

    }
    button.signup{
       margin:5%;
       background-color: #487FF8;
       color: white;
       padding:15px 40px;
       border: none;
       border-radius: 5px;
       font-weight: 700;
       font-size:1rem;
       
    }
`
