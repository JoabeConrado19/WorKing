import styled from "styled-components"



export const StyledDashboard = styled.div`
background-color: #D9D9D9;
display: flex;
flex-direction: column ;
padding: 10px 30px;

.headerMain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    
}
 h3 {
    font-size: 20px;
 }
 .btnFilter {
    padding: 15px;
    background-color: #ffff;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;

 }

 .listCard{
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
 }

`