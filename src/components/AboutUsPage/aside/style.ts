import styled from "styled-components";

interface IAside {
  rigth: string;
}

export const Aside = styled.aside<IAside>`
  width: 250px;
  height: 100vh;
  background-color: #ffa800;
  position: fixed;
  right: ${({ rigth }) => rigth};
  z-index: 2;
  cursor: default;
  border-radius: 0px 10px 10px 0px;
  animation: bounceInLeft 2s;


  .userName {
    height: 12%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;


    img:hover {
        border: solid 2px #ffffff;
        cursor: pointer;
      }

    svg {
      width: 15%;
      font-size: 30px;
      height: 100%;
    }


       

    img {
      width: 60px;
      border-radius: 100%;
    }

    h2 {
      width: 70%;
      height: 100%;
      padding-left: 10px;
      font-size: 20px;
      display: inline-flex;
      align-items: center;
      visibility: visible;
    }

    button {
      width: 15%;
      height: 100%;
      background-color: transparent;
      font-size: 30px;

      svg {
        width: 100%;
      }
    }
  }

  .container__menu {
    width: 100%;
    height: 88%;
  }

  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li {
      padding: 10px;
      margin: 10px;

      border-radius: 10px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      cursor: pointer;

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      svg {
        font-size: 30px;
      }

      button{
        background-color: transparent;
        display: flex;
        align-items: center;
        font-size: 18px;
        text-align: start;
      }

      p {
        width: 0px;
        margin-left: 10px;
        visibility: visible;
      }

      :hover {
        transition: 0.5s;
        background-color: black;
        animation: slide-right 1.0s;
        border-radius: 5px;

        svg{
          fill: #ffa800;
        }

        p {
          color: #ffffff;
        }
      }
    }
  }

  @media (min-width: 720px) {
    width: 70px;
    position: fixed;
    right: auto;

    .userName {
      padding: 0;
      justify-content: center;

    

      h2 {
        width: 0px;
        padding: 0;
        visibility: hidden;
      }

      button {
        width: 0px;
        height: 0px;
        visibility: hidden;
      }
    }

    .menu {
      li {
        padding: 10px 10px 10px 20px;
        margin: 0;
        border: none;
        border-radius: 0;
        background-color: transparent;
       

        p {
          visibility: hidden;
        }
      }
    }

    :hover {
      width: 200px;
      position: fixed;
      z-index: 2;
      transition: 0.5s ease;
      

      .userName {
        width: 100%;
        height: 20%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        svg {
          width: 100%;
          height: 50%;
          font-size: 80px;
        }

        h2 {
          width: 100%;
          padding: 10px 0;
          visibility: visible;
          text-align: center;
          justify-content: space-around;
        }
      }

      .container__menu {
        height: 80%;

        .menu {
          li {
            p {
              visibility: visible;
              width: 100%;
            }
          }
        }
      }
    }
  }

.slide-right {
	        -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
}




    //ANIMAÇÃO MENU AO INCIAR A APLICAÇÃO
  .bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-3000px, 0, 0);
  transform: translate3d(-3000px, 0, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(25px, 0, 0);
  transform: translate3d(25px, 0, 0);
  }
  75% {
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  }
  90% {
  -webkit-transform: translate3d(5px, 0, 0);
  transform: translate3d(5px, 0, 0);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-3000px, 0, 0);
  transform: translate3d(-3000px, 0, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(25px, 0, 0);
  transform: translate3d(25px, 0, 0);
  }
  75% {
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  }
  90% {
  -webkit-transform: translate3d(5px, 0, 0);
  transform: translate3d(5px, 0, 0);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
  } 
`;
