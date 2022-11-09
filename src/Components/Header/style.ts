import styled from "styled-components";
export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: transparent;
  gap: 5px;
  align-items: center;
  justify-items: center;
  justify-content: center;

  .search {
    display: flex;
    padding: 5px 10px;
    width: 50vw;
    border: none;
    border-radius: 8px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    opacity: 50%;
  }
  input {
    background-color: transparent;
    width: 100px;
    border: none;
    padding: 5px;
    font-size: 18px;
  }
  button {
    display: flex;
    background-color: transparent;
    font-size: 20px;
    align-items: center;
  }
`;
