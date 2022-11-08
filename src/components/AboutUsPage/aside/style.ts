import styled from "styled-components";

export const Aside = styled.aside`
  height: 100vh;
  background-color: #ffa800;
  position: fixed;
  z-index: 2;

  .userName {
    height: 12%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 50px;
    }

    h2 {
      width: 0px;
      padding: 0px;
      visibility: hidden;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      padding: 10px 10px 10px 20px;

      svg {
        font-size: 30px;
      }

      p {
        visibility: hidden;
        margin-left: 10px;
        width: 0px;
      }

      :hover {
        background-color: #ffffff;
      }
    }
  }

  :hover {
    width: 15vw;
    position: absolute;
    z-index: 2;

    .userName {
      width: 100%;
      height: 20%;
      flex-direction: column;

      svg {
        font-size: 70px;
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
`;
