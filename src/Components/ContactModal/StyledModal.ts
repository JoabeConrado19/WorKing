import styled from "styled-components";

interface iStyledProps{
    open: string
}

export const StyledContactModal = styled.div<iStyledProps>`
    display: ${props => props.open};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    position: fixed;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.3);

    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    z-index: 6;
    .modalHeader{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 15px 15px 20px 15px;
        background-color: #FFA800;
        
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        
        border-bottom: solid 2px black;
        .modalClose{
            float: right;
            padding: 0;
            border: none;
            font-size: 20px;
            background-color: #FFA800;
        }
    }
    
    main{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFA800;
        figure{
            height: 120px;
            margin: 15px 20px 10px 10px;
            img{
                height: 100%;
                border: solid 2px black;
                border-radius: 8px;
            }
        }
        div{
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }    
    }
`