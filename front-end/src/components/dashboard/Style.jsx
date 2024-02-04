import styled from "styled-components"

export const DashboardContainer = styled.div`
display: grid;
grid-template-columns:25% 75%;
.left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    .top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 10px;
        background-color: #9db8f6;

        .head{
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;
            padding: 5%;
        }
    }
    .bottom{
        display: flex;  
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        margin-top: 5%;
        background-color: #dee9ff;

    }
}
.right{
    background-color: #dee9ff;
    border-radius: 10px;
    margin: 0% 5%;
    padding: 1% 3%;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .right{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 40%;

        }
        button{
        width: 40%;
        color: white;
        background-color: #487FF8;
        border: none;
        border-radius: 5px;
        padding: 3% 0%; 
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
    }
    button:hover{
        opacity: 0.9;
    }
    }
 
    .bottom{
        .item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        .itemtop{
            display: grid;
            grid-template-columns: 5% 55% 20% 20%;
            align-items: center;
            background-color: grey;
            border-radius: 15px;
            padding: 0% 2%;
            width: 100%;
        }
        .itembottom{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            background-color: wheat;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            .team{
                display: flex;
                justify-content:space-between;
                align-items: center;
                width: 70%;
                p{
                    background-color: white;
                    border-radius: 10px;
                    padding: 2%;

                }
               
            }
            .desc{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 70%;    
                h3{
                    align-self: flex-start;
                }
            }
        }
        

        }
    }
}
`