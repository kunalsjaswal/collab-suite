import styled from "styled-components"

export const DashboardContainer = styled.div`
    display: grid;
    grid-template-columns:25% 75%;

`

export const OptionFileDiv = styled.div`
    width: 80%;
    margin: auto;

    .profile-section{
        width: 90%;
        border-radius: 10px;
        background-color: #9db8f6;
        padding: 5%;
        color:#444655;
        .email{
            display: flex;
            align-items:center;
            padding:3%;
            gap: 2%;
            font-size: 1.2em;
            justify-content: center;
        }
        .head{
            width: 100%;
            display: flex;
            align-items: center; 
            justify-content: space-evenly;
            .profile-logo{
                border-radius: 50%;
                padding: 2.5% 2%;
                background-color: white;
            }
        }
    }
    .setting-section{
        width: 90%;
        border-radius: 10px;
        margin-top: 10%;
        background-color: #dee9ff;
        padding: 5%;

        h2{
            text-align: center;

        }
        ul{
            list-style-type: circle;
            list-style-position: outside;
            li{
                cursor: pointer;
                margin-bottom: 3%;
                transition: 200ms;
            }
            li:hover{
                opacity: 0.8;
                list-style-type: disc;
            }
        }
    }
    .messages{
        width: 90%;
        border-radius: 10px;
        background-color: #9db8f6;
        padding: 5%;
        color:#444655;
        margin-top: 10%;

        h2{
        text-align: center;

        }
    }


`

export const ProjectListDiv = styled.div`
    
    border-radius: 10px;
    width: 90%;
    padding: 3%;
    padding-bottom: 5%;
    background-color: #dee9ff;
    overflow: auto;
    height: 500px;
    .columns{
            width: 90%;
            display: grid;
            grid-template-columns: 60% 20% 20%;
            align-items: center;
            padding: 0 1rem;
            margin-bottom: 1rem;
            font-size: 1.5em;
            box-shadow: 0px 0px 5px 0px #000000;
            border-radius: 10px;
            padding: 0% 2%;

    }
    .top{
        display: grid;
        grid-template-columns: 70% 30%;

        .right{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            
            span{
                margin-left: 10%;
            }
            select{
                width: 30%;
                margin-left:2%;
                padding: 2%;
                border-radius: 5px;
                background-color: white;
                color: black;
            }
            button{
                color: white;
                background-color: #C1A875;
                border: none;
                border-radius: 5px;
                padding: 3%; 
                font-weight: 700;
                cursor: pointer;
                transition: 200ms;
            }
            button:hover{
                opacity: 0.9;
            }
        }
        
    }

    
`
export const ItemDiv = styled.div`
    margin-bottom: 2%;
    .item{
        display: flex;
        flex-direction: column;
        margin:0 auto;
        .itemtop{
            display: grid;
            grid-template-columns: 5% 55% 20% 20%;
            align-items: center;
            background-color: #444655;
            color: white;
            transition: 200ms;
            width: 90%;
            padding: 0% 2%;

            .arrow-up-icon{
                transform: rotate(180deg);
                cursor: pointer;
            }
        }
    }
    
`

export const ShowMoreDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: #bfc0c6;
    color: #1f1f1f;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0% 2%;
    transition: 200ms;
    
    .team{
        display: flex;
        align-items: center;
        width: 100%;
        p{
            background-color: white;
            border-radius: 10px;
            padding: 1% 2%;
            margin-left: 2%;
        }
    }
    .desc{
        display: grid;
        grid-template-columns: 70% 30%;
        gap: 2%;
        h3{
            align-self: flex-start;
        }
    }
`

