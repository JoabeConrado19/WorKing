import styled from "styled-components";
import background from "../assets/4.png"

export const RegisterStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
    height: 100vh;
    
    main{
        width: 357px;
        animation: bounce-in-top  1s;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -13px;
        background: rgba(173, 173, 173, 0.37);
        border-radius: 10px;     
        padding:26px;
    }

    form > input{
        width: 90%;
        height: 38px;
        background: #FFA800;
        border: 2px solid #000000;
        border-radius: 10px;
        margin-bottom: 15px;
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        font-size: 16px;
        color: black;
        padding: 10px;
        outline: 0;
        ::placeholder{
            color: #000000;
        }
    }

    figure{
        width: 100%;
        margin-left: -0px;
        text-align: center;
    }

    figure > img{
        width: 232px;
    }

    button{
        width: 94px;
        height: 34px;
        background: #FFA800;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all 1s ease;
        border: 2px solid transparent;
    }
    button: hover{
        background: transparent;
        border: 2px solid #FFA800;
    }

    p{
        font-family: 'Roboto Mono';
        font-weight: 500;
        font-size: 15px;
        color: #000000;
        margin-bottom: 4px;
    }
    .Register-logo{
        margin-bottom: 20px;
        margin-top: 15px;
    }

    .divBtsNavigate {
        width: 200px ;
        display: flex;
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


    
`;
