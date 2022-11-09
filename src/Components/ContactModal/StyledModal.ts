import styled from "styled-components";

interface iStyledProps{
    open: string
}

export const StyledContactModal = styled.div<iStyledProps>`
    display: ${props => props.open};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    position: fixed;
    animation: bounce-in-left 1s;

    h3{
            overflow: hidden;
        }

    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    z-index: 6;
    .modalHeader{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 15px 15px 20px 15px;
        background-color: #FFA800;
        
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        
        border-bottom: solid 2px black;
        .modalClose{
            float: right;
            padding: 0;
            border: none;
            font-size: 20px;
            background-color: #FFA800;
        }
    }
    
    main{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFA800;
        figure{
            height: 120px;
            margin: 15px 20px 10px 10px;
            img{
                height: 100%;
                border: solid 2px black;
                border-radius: 8px;
            }
        }
        div{
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }    

        h3{
            overflow: hidden;
        }
    }

    .bounce-in-left {
	-webkit-animation: bounce-in-left 1.1s both;
	        animation: bounce-in-left 1.1s both;
}


 @-webkit-keyframes bounce-in-left {
  0% {
    -webkit-transform: translateX(-600px);
            transform: translateX(-600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(-68px);
            transform: translateX(-68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(-28px);
            transform: translateX(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-left {
  0% {
    -webkit-transform: translateX(-600px);
            transform: translateX(-600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(-68px);
            transform: translateX(-68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(-28px);
            transform: translateX(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}


`