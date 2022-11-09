import styled from "styled-components";
import backgroundOne from "../assets/1.png";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledClientDash = styled.div`
  background-image: url(${backgroundOne});
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  .conteiner div p {
    font-size: 16px;
    text-align: start;
    width: 100%;
    padding-left: 45px;
}


  @media (min-width: 720px) {

    padding-left: 70px;
  }

  header {
    padding: 10px 0;
    display: flex;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
    justify-content: flex-start;
    column-gap: 30%;

    svg {
      font-size: 28px;
    }

    h1 {
      font-size: 25px;
    }
  }

  .input-div {
    display: flex;
    flex-direction: column;

    h2 {
      padding: 8px;
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 1rem;
    }

    input {
      padding: 8px;
      border-radius: 8px;
      width: 90%;
      margin: 0 auto;
      ::placeholder{
                        color: #FFA800;
                }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .conteiner {
    border-radius: 8px;
    background-color: #ffff;
    height: 100%;
    justify-content: space-evenly;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    row-gap: 30px;
    margin-bottom: 1rem;
    min-height: 280px;
    max-width: 430px;
    animation: bounce-top 1s;


    .bounce-top {
	-webkit-animation: bounce-top 0.9s both;
	        animation: bounce-top 0.9s both;
}

 @-webkit-keyframes bounce-top {
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


    .conteudo {
      width: 100%;
    }

    .top-conteiner {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      border-bottom: 1px solid;
      width: 100%;

      h3 {
        font-size: 14px;
      }

      span {
        font-size: 12px;
        border: 2px solid;
        border-radius: 10px;
        font-weight: 700;
        padding: 5px;
        margin-bottom: 3px;
        background-color: transparent;
      }
    }

    .conteudo {
      row-gap: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .div-categoria {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: row;

      button {
        display: flex;
        width: 100px;
        justify-content: space-around;
        padding: 5px;
        border-radius: 8px;
        background-color: #ffa800;

        svg {
          font-size: 13px;
        }
      }

      .delete {
        background-color: red;
      }
    }

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      row-gap: 7px;

      p {
        font-size: 15px;
      }
    }

    svg {
      font-size: 32px;
      margin: 3px;
    }
  }

  @media (min-width: 540px) {
    header {
      column-gap: 38%;
    }
  }

  @media (min-width: 768px) {
    header {
      column-gap: 45%;

      svg {
        display: none;
      }
    }

    main {
      .input-div {
        h2 {
          padding: 5px;
          text-align: left;
          margin-left: 4rem;
        }
      }

      ul {
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: auto;
        max-height: 500px;

        .conteiner {
          width: 40%;

          .div-categoria {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            margin-top: 10px;

            .btedit {
              padding: 5px;
              border-radius: 8px;
              background-color: #ffa800;
            }

            .btedit:hover {
              background-color: transparent;
              color: #ffa800;
              border: 1px solid #ffa800;
              transition: 0.5s;
            }

            .delete {
              background-color: red;
              border: 1px solid transparent;
            }

            .delete:hover {
              color: red;
              transition: 0.5s;
              border: 1px solid red;
              background-color: transparent;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1260px) {
    ul {
      margin: 0 auto;
      max-width: 93.6%;
    }
  }

  @media (min-width: 1480px) {
    main {
      ul {
        column-gap: 20px;
        .conteiner {
          min-width: 570px;
          width: 50%;
        }
      }
    }
  }
`;

export const StyledAside = styled.aside`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: fixed;
    background-color: #ffa220;
    width: 60px;

    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    svg {
      font-size: 35px;
    }
  }
`;

export const StyledForm = styled.form`
  background-color: #f5f5f5;
  height: 150px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;

  textarea {
    width: 95%;
    margin: 0 auto;
    border-radius: 8px;
    text-align: left;
    background-color: #f5f5f5;
    color: black;
    font-weight: 700;
    outline: 0;
    height: 180px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;

    select {
      width: 40%;
      border-radius: 8px;
      background-color: #f5f5f5;
      color: black;
      font-size: 16px;
      font-weight: 700;
    }

    input {
      width: 100%;
      height: 30px;
      padding: 5px;
      border-radius: 8px;
      color: black;
      font-size: 16px;
      font-weight: 700;
      background-color: #f5f5f5;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .publish {
      border: 1px solid #38c958;
      background-color: #38c958;
      color: white;
      border-radius: 10px;
      width: 100px;
      margin: 0px 3px 4px 0px;
      align-self: flex-end;
      padding: 4px;
    }

    .publish:hover {
      color: #38c958;
      transition: 0.5s;
      border: 1px solid #38c958;
      background-color: transparent;
    }

    .description {
      width: 100% !important;
      height: 50%;
      border-radius: 8px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      background-color: transparent;
    }
  }
`;
