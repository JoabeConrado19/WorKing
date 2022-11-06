import styled from "styled-components";

interface iStyledProps{
    open: string
}

export const StyledModal = styled.div<iStyledProps>`
    display: ${props => props.open};
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.3);
    .modalForm{
        width: 50%;
        min-height: 340px;
        border-radius: 8px;
        padding-bottom: 100px 0;
        label{
            margin-bottom: 10px;
        }
    }
    .modalHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px 20px 10px;
        background-color: #FFA800;
        margin-bottom: 10px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .modalClose{
        float: right;
        padding: 0;
        border: none;
        font-size: 20px;
        background-color: #FFA800;
    }
    label{
        margin: 0 5px;
    }
    button[type="submit"]{
        margin: 0 10px;
    }
    input, select{
        border: 1.3px solid #F8F9FA;
        margin: 0 10px 15px 10px;
    }
    
    @media (max-width: 700px){
        .modalForm{
            width: 60%;
        }
    }
    @media (max-width: 600px){
        .modalForm{
            width: 70%;
        }
    }
    @media (max-width: 500px){
        .modalForm{
            width: 80%;
        }
    }
    @media (max-width: 400px){
        .modalForm{
            width: 90%;
            min-width: 250px;
        }
    }
`