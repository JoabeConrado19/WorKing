import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    background-color: #fff;
    width: 80%;
    margin-top: 20px;
    margin: 20px auto;
    border-radius: 20px;
    padding: 1em;
  }

  .containerUsuario {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    .containerImage {
      width: 12rem;
      height: 14rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h2 {
        font-size: 14px;
        text-align: center;
        padding: 5px;
      }

      img {
        width: 90%;
        height: 70%;
        align-self: center;
        border-radius: 50%;
      }

      *:not(:first-child) {
        margin: 0.5em 0;
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .input-name {
        display: flex;
        flex-direction: column;

        *:not(:last-child) {
          margin-bottom: 0.5em;
        }
      }

      .date-sex {
        display: flex;
        flex-direction: row;
      }

      .input-sex {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .sex {
          display: flex;

          input {
            margin: 0 10px;
          }
        }
      }
    }
  }

  .input-container {
    margin: 35px 0 0 0.5em;
    display: flex;
    flex-direction: column;

    *:not(:first-child) {
      margin: 0.5em 0;
    }

    .input-email {
      display: flex;
      flex-direction: column;

      .button-email {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      input {
        width: 70%;
      }
    }

    .input-tel {
      display: flex;
      flex-direction: column;

      .button-tel {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      input {
        width: 70%;
      }
    }

    .input-password {
      display: flex;
      flex-direction: column;

      .button-password {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: #ffa800;
          width: 170px;
          height: 30px;
          border-radius: 10px;
          align-self: center;

          font-size: 15px;
          font-weight: 600;
          align-items: center;
          padding: 1.5em;
        }
      }
      input {
        width: 70%;
      }
    }
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffa800;
  width: 170px;
  height: 30px;
  border-radius: 10px;
  align-self: center;

  font-size: 15px;
  font-weight: 600;
  align-items: center;
  padding: 1.5em;
`;

export const StyledInput = styled.input`
  padding: 1em 0.5em;
  width: 100%;
  background-color: #cecece;
  border-radius: 15px;
`;
