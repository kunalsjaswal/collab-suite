import styled from "styled-components";

export const CreateTeamDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3%;
    .container{
        border: 1px solid black;
        width: 50%
    }
    .heading{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button{
            width: 100%;
            padding: 3%;
            background-color: #487FF8;
            border: none;
            font-weight: 600;
            font-size: 1.3rem;
        }
    }
    .formbox{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5%;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3% 0%;
        width: 60%;
        input{
            padding: 2% 2%;
            border-radius: 2px;
            border: 1px solid black;
            margin: 4% 0%;
            width: 70%;
        }
        button{
        width: 30%;
        color: white;
        background-color: #487FF8;
        border: none;
        border-radius: 5px;
        padding: 2% 0%; 
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
    }
    button:hover{
        color: black;
    }  
    select {
        padding: 2% 2%;
        border-radius: 2px;
        border: 1px solid black;
        margin: 4% 0%;
        width: 70%;
        
}
    }
`
export const JoinTeamDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3%;
    .container{
        border: 1px solid black;
        width: 50%
    }
    .heading{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button{
            width: 100%;
            padding: 3%;
            background-color: #487FF8;
            border: none;
            font-weight: 600;
            font-size: 1.3rem;
        }
    }
    .formbox{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5%;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3% 0%;
        width: 60%;
        input{
            padding: 2% 2%;
            border-radius: 2px;
            border: 1px solid black;
            margin: 5% 0%;
            width: 70%;
        }
        button{
        width: 30%;
        color: white;
        background-color: #487FF8;
        border: none;
        border-radius: 5px;
        padding: 2% 0%; 
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
        margin-top: 2%;
    }
    button:hover{
        color: black;
    }  

    }
`
