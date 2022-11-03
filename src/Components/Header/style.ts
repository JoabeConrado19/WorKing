import styled from "styled-components"




export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: #ffff; 
  box-shadow: 0 0 20px 3px;
  gap: 5px;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  

  .search{
    display: flex;
    padding: 5px 10px;
    width: 35vw ;
    border: none;
    border-radius: 8px ;
    background-color: #D9D9D9;
    justify-content: space-around;
    align-items: center;
    opacity: 50%;
  }

  input {
    background-color: #D9D9D9;
    width: 80%;
    border: none;
    padding: 5px;
    font-size: 18px;
  }
  button {
    display: flex;
    background-color: #D9D9D9;
    font-size: 25px;
    align-items: center;
  }
  
`