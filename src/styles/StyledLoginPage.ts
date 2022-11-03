import styled from "styled-components";

export const StyledLoginPage = styled.div`
     
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    figure > img{
        width: 250px;
    }

    form {
        margin-left: 25px;
        margin-top: 15px;
    }
    
    .divBtsNavigate{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    .divRegistros {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 4px;

        span{
            margin-bottom: 5px;
        }
    }

    

    .spanJaRegistrado {
        margin-top: 45px;
        margin-bottom: 25px;
    }

    span {
        font-weight: 300;
        font-size: 12px;
    }

    form > input{
        width: 90%;
        height: 48px;
        background-color: rgba(255, 168, 0, 0.5);
        border: 2px solid #000000;
        border-radius: 10px;
        margin-bottom: 15px;
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        font-size: 16px;
        color: black;
        padding:12px;
        outline: 0;

    }

    p{
        font-family: 'Roboto Mono';
        font-weight: 500;
        font-size: 15px;
        color: #000000;
        margin-bottom: 4px;
    }

    button{
        width: 94px;
        height: 34px;
        background: #FFA800;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .divContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 15px;
    }

    .divLabelBt {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        gap: 10px;
    }

    @media (min-width: 700px) {
        .divContainer {
            background-color: rgba(173, 173, 173, 0.37);
            padding: 15px;
            width: 450px;
        }

        .divBtsNavigate{
            display: flex;
            justify-content: center;
            gap: 200px;
        }
    }
`