import styled from "styled-components";


export const LocationMain = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
width: 100vw;
height: 100vh;


@media (min-width: 768px) {
    .btMenuOpen {  
        display: none;
        background-color: red;
    }
    flex-direction: row;
}

.map-marker{

  margin-bottom: 37px;
  font-weight: 700;
}

`


export const StyledLocation = styled.div`
        background-color: transparent;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        margin: 0 auto;
    `


export const StyledAside = styled.aside`
    display: none;


    @media (min-width: 768px) {
    display: flex;
    position: fixed;
    background-color: transparent;
    width: 4%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    svg{
        font-size: 40px;

    }
    }
`

