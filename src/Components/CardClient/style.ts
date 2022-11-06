import styled from "styled-components"

export const CardStyled = styled.div`
height: 380px;
width: 40%;
display: flex;
flex-direction: column;
padding: 20px;
background-color: #ffffff;
border-radius: 8px;

margin-bottom: 20px;
align-items: center;


figure {
    height: 170px;
    width: 100%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    border-radius: 8px;
}
img {
    height: 100%;
    width: 100%;
    margin: 0;
    border-radius: 8px;
    cursor: pointer;
}
.cardProfile{
    margin: 20px 0;
    justify-content: space-between;
    display: flex;
}
span {
    background-color: #A1a1A1;
   font-weight: bold;
    padding: 3px;
    border-radius: 8px;
}

.cardButtons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
}
.btnContact{
    height: 40px;
width: 80px;
border-radius: 10px;
border: 1px solid transparent;
background-color: #FFA800;
font-weight: bold;
}

.btnContact:hover {
    transition: 0.5s;
    background-color: transparent;
    border: 1px solid #FFA800;
    color: #FFA800;

}

.btnRoute{
    height: 40px;
    width: 90px;
border-radius: 10px;
background-color: #3B925F;
color: #ffffff;
font-weight: bold;
border: 1px solid transparent;
}

.btnRoute:hover {
    background-color: transparent;
    border: 1px solid #3B925F;
    color: #3B925F;
}
`