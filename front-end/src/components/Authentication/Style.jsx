import styled from "styled-components";

export const LoginDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
.main{
    width: 30%;
    border: 1px solid grey;
    margin: 2%;
    padding: 1% 0;
}

.heading{
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
    input{
        margin-bottom: 4%;
        padding: 2% 2%;
        border-radius: 2px;
        border: 1px solid black;
        width: 60%;
    }
        button{
        width: 50%;
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
}

`
export const SignupDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
.main{
    width: 30%;
    border: 1px solid grey;
    margin: 2%;
    padding: 1% 0;
}

.heading{
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
    input{
        margin-bottom: 4%;
        padding: 2% 2%;
        border-radius: 2px;
        border: 1px solid black;
        width: 60%;
    }
        button{
        width: 50%;
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
}`
