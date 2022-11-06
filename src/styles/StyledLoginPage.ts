import styled from "styled-components";
import background from "../assets/4.png"
export const StyledLoginPage = styled.div`
     
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${background});
    height: 100vh;
    figure > img{
        width: 200px;
    }
   

    .iconEntrar {
        width: 30px;
        height: 30px;
    }

    figure {
        animation: bounce-in-top  1s;
    }

   button{
        border: 1px solid transparent;
   }

    button {
        :hover{
        transition: 0.4s;
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
        background-color: #FFA800;
        border: 2px solid #000000;
        border-radius: 10px;
        margin-bottom: 15px;
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        font-size: 16px;
        color: black;
        padding:12px;
        outline: 0;
        ::placeholder{
            color: #000000;
        }

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
        animation: bounce-in-top  1s;
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

    .bounce-in-top {
	-webkit-animation: bounce-in-top 1.1s both;
	        animation: bounce-in-top 1.1s both;
}

@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

`