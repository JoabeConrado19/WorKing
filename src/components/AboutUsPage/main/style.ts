import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 0;
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
    overflow: auto;
  }

  .container__informacoes {
    width: 100%;
    margin-bottom: 20px;

    .container__informacoes__header {
      display: flex;
      flex-direction: row;
      align-items: center;

      button {
        width: auto;
        padding: 0 5px;
        font-size: 24px;
        border-radius: 5px;
      }

      h2 {
        font-size: 24px;
        padding-left: 10px;
        color: #ffa800;
        text-align: center;
      }
    }

    p {
      font-size: 16px;
      padding: 10px 0;
      text-align: justify;
      line-height: initial;
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
      width: 100%;
      overflow: hidden;
    }

    .listaDeUsuarios {
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: auto;
    }

    .card {
      min-width: 200px;
      padding: 10px;
      border-radius: 10px;
      margin: 10px 10px 10px 0;
      background-color: #d9d9d9;

      div {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;

        img {
          width: 100%;
        }

        a {
          width: 50%;
          text-align: center;
          font-size: 30px;
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

  @media (min-width: 720px) {
    padding-left: 70px;

    .container__lista__criadores {
      .card {
        div {
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
      }
    }

    .container__informacoes {
      .container__informacoes__header {
        button {
          width: 0;
          visibility: hidden;
        }

        h2 {
          width: 100%;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }
`;
