import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderNotFound = styled.div`
width: 100vw;
height: 15vh;
/* background-color: #A1A1; */
display: flex;
align-items: center;
box-shadow: 0 0 20px 3px;
justify-content: space-evenly;
padding: 0px;
justify-items: center;
border-radius: 0 0 8px 8px;
gap: 30px;

.componentsHeader {
 width: 100vw;
height: 100%;
background-color: #A1A1;
display: flex;
align-items: center;
box-shadow: 0 0 20px 3px;
justify-content: space-evenly;
padding: 0px;
justify-items: center;
border-radius: 0 0 8px 8px;
gap: 30px;
}


img {
   padding: 15px;
   /* margin: 10px; */
   
}

/* (Link){
   padding: 30px;
   background-color: #ffa800;
} */

`
export const LinkStyled = styled(Link)`

  /* margin: 10px; */
  padding: 15px;
  width: 95px;
  height: 40px;
  background-color: #ffa800;
  border-radius: 8px;
  color: #828282;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
   border: none;

   span {
    color: #828282;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
align-items: center;
justify-content: center;
justify-items: center;

   }
`;