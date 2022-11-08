import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;

  > div {
    width: 95%;
    height: 95%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .container__informacoes {
    width: 100%;
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      color: #ffa800;
      text-align: center;
      padding: 20px 0;
    }

    p {
      font-size: 16px;
      padding: 10px 0;
    }
  }

  .container__lista__criadores {
    width: 100%;

    h2 {
      font-size: 22px;
      text-align: start;
      padding: 10px 0;
    }

    > div {
      width: 87vw;
      overflow: hidden;
    }

    .listaDeUsuarios {
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: auto;
    }

    .card {
      min-width: 200px;
      padding: 10px;
      border-radius: 10px;
      margin: 10px;
      background-color: #d9d9d9;

      div {
        width: 100%;
        height: 200px;
        align-items: center;
        display: inline-flex;
        border-radius: 10px;

        img {
          width: 100%;
          z-index: 1;
        }

        a {
          width: 0px;
          height: 0px;
          font-size: 0px;
        }

        :hover {
          img {
            width: 0px;
            visibility: hidden;
          }

          a {
            width: 50%;
            height: 50%;
            font-size: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
        }
      }

      h3 {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        width: 100%;
        padding: 10px 0;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffa800;
      }
    }
  }
`;
