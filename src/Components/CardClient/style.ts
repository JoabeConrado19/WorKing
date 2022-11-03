import styled from "styled-components"

export const CardStyled = styled.div`
height: 470px;
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
width: 150px;
border-radius: 10px;
background-color: #FFA800;
font-weight: bold;
/* color: #828282; */
}

.btnRoute{
    height: 40px;
width: 100px;
border-radius: 10px;
background-color: #3B925F;
color: #ffffff;
font-weight: bold;
}
`