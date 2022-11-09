import styled from "styled-components"
import backgroundOne from "../assets/1.png"


export const StyledDashboard = styled.div`
background-color: #D9D9D9;
display: flex;
flex-direction: column ;
padding: 10px 30px;
margin-left: 60px;
background-image: url(${backgroundOne});
height: 100vh;
.headerMain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 90px;




}
 h3 {
    font-size: 20px;
 }
 .btnFilter {
    padding: 15px;
    background-color: transparent;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;

 }

 .listCard{
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
    animation: bounce-top 1s;

    margin: 0 90px;
 }


 .card {
   width: 100%;
   display: flex;
   flex-direction: column;
 }


 .bounce-top {
	-webkit-animation: bounce-top 0.9s both;
	        animation: bounce-top 0.9s both;
}
.input-div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        input {
                width: 70%;
                border-radius: 10px;
                height: 35px;
                ::placeholder{
                        color: #FFA800;
                }
        }
        gap: 10px;
}

.search{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px;

        button{
                width: 50px;
                height: 30px;
                border-radius: 10px 0px 0px 10px;
        }
        input {
                width: 50%;
                height: 30px;
                border-radius: 0px 10px 10px 0px;
                ::placeholder{
                        color: orange;
                }
        }
}

@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}


`