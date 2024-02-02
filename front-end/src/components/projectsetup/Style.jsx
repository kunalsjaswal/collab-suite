import styled from "styled-components";

export const SetupFileDiv = styled.div`
    
    border: 1px solid #C1A875;
    width: 30%;
    margin: auto;
    margin-top: 2%;

    .heading{
        display: grid;
        grid-template-columns: 50% 50%;

        button{
            background-color: white;
            border: 0;
            color: #444655;
            cursor: pointer;
        }
        .btn-1{
            border-bottom-right-radius: 10px;
        }
        .btn-2{
            border-bottom-left-radius: 10px;
        }
    }
    .content{
        /* border: 1px solid black; */
        min-height: 200px;
        padding: 10% 5%;
    }

`
export const CreateTeamDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align:center;

    input, .tx-area{
        color: #C1A875;
        padding: 2%;
        border-radius: 2px;
        margin: 2% 0%;
        width: 70%;
        resize: none;
        border: 2px solid #C1A875;
    }
    button{
        width: 30%;
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
    .select-input {
        padding: 2%;
        border-radius: 2px;
        border: 2px solid #C1A875;
        background-color: #C1A875;
        color: white;
        margin: 4% 0%;
        width: 75%;
    }
    
`
export const JoinTeamDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    margin-top: 3%;
 
    input{
        font-weight: bold;
        color: #C1A875;
        padding: 2%;
        border-radius: 2px;
        border: 2px solid #C1A875;
        width: 70%;
    }
    button{
        width: 30%;
        color: white;
        background-color: #C1A875;
        border: none;
        border-radius: 5px;
        padding: 4%; 
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
        margin-top: 4%;
    }
    button:hover{
        opacity: 0.9;
    }  

`
