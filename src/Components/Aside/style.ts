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
  .userName {
    height: 12%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    svg {
      width: 70%;
      font-size: 30px;
      height: 100%;
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
      border: 1px solid #ffffff;
      border-radius: 10px;
      background-color: #ffffff;
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
      p {
        width: 0px;
        margin-left: 10px;
        visibility: visible;
      }
      :hover {
        background-color: #ffffff;
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
      .userName {
        width: 100%;
        height: 20%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        svg {
          width: 100%;
          height: 50%;
          /* font-size: 70px; */
        }
        h2 {
          width: 100%;
          padding: 10px 0;
          visibility: visible;
          text-align: center;
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
`;