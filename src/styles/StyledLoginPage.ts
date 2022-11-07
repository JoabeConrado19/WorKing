import styled from "styled-components";

export const StyledLoginPage = styled.div`
     
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    figure > img{
        width: 200px;
    }

    .iconEntrar {
        width: 30px;
        height: 30px;
    }

   

    button {
        :hover{
            transition: 0.2s;
        background-color: transparent;
        border: 1px solid #FFA800;
        color: #FFA800;
    }
    }

    .iconEntrar {
        width: 30px;
        height: 30px;
    }

    form {
       display: flex;
        align-items: center;
        flex-direction: column;
       justify-content: center;
       width: 100%;
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

    .maletaIcon {
        width: 30px;
        height: 30px;
    }

    .clienteIcon{
        width: 30px;
        height: 30px;
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
        width: 95%;
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
        padding: 5px;
    }

    .divLabelBt {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        gap: 10px;
    }

    @media (min-width: 600px) {
        .divContainer {
            background-color: rgba(173, 173, 173, 0.37);
            padding-top: 20px;
            width: 450px;
        }

        .divBtsNavigate{
            display: flex;
            justify-content: center;
            gap: 200px;
        }
    }
`