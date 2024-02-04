import styled from "styled-components";


export const SignupDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .main{
        width: 30%;
        border: 1px solid #C1A875;
        margin: 2%;
        padding: 1% 0;
    }
    
    .heading{
        color: #444655;
        text-align: center;
        margin-bottom: 3%;
    }
    .formbox{
        padding: 3% 0%;
    }
    form
    {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        div{
            display: flex;
            margin-bottom: 4%;
            width: 80%;

            .field-icon{
                color: #C1A875;
            }
        }
        input{
            width: 90%;
            padding: 2% 2%;
            border: 0px;
            border: 2px solid #C1A875;
            margin-left: 2%;
        }
        button{
            width: 50%;
            color: white;
            background-color: #C1A875;
            border: none;
            border-radius: 5px;
            padding: 2% 0%; 
            font-weight: 700;
            cursor: pointer;
            transition: 200ms;
        }
        button:hover{
            opacity: 0.9;
        }  
    }
`
