import styled from "styled-components";

export const StyledWallet = styled.div`
    background-color: #fff;
    margin-left: 85px;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 90%;
    height: 100%;
    border-radius: 10px;
    opacity: 86%;
    button {
        cursor: pointer;
    }

    .btMenuOpen{
                display: none;
        }

    @media (max-width: 720px) {
        margin: 0;
        width: 100%;
        .btMenuOpen{
                display: block;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    h1{
        text-align: center;
        margin-top: 15px;
        font-size: 25px;
    }

    .divSaldo_Transferencia {
        margin-top: 15px;
        display: flex;
        gap: 15px;
        background-color: #fff;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }
    

    .btTransferir {
        background-color: #1ab34a;
        padding: 10px;
        border-radius: 10px; 
        border: 1px solid;
    }

    .btTransferir:hover{
        transition: 0.8s;
        padding: 10px;
        color: #1ab34a;
        background-color: transparent;
        border: 1px solid #1ab34a;
    }

    .Transacoes {
        margin-top: 10px;
        width: 100%;
        height: 100%;
    }

    .CardTransacao{
        margin-top: 15px;
        display: flex;
        animation: heartbeat 1s;
        background-color: #FFA800;
        width: 80%;
        padding: 8px;
        margin: 15px auto;
        border-radius: 10px;
        justify-content: space-around;
    }

    .descricaoCard {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .heartbeat {
	-webkit-animation: heartbeat 1.5s ease-in-out infinite both;
	        animation: heartbeat 1.5s ease-in-out infinite both;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

` 