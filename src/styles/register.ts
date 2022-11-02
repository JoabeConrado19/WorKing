import styled from "styled-components";

export const RegisterStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    
    main{
        
        width: 357px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -13px;
        background: rgba(173, 173, 173, 0.37);
        border-radius: 10px;     
        padding:26px;
    }

    form > input{
        width: 90%;
        height: 38px;
        background: rgba(255, 168, 0, 0.5);
        border: 2px solid #000000;
        border-radius: 10px;
        margin-bottom: 15px;
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        font-size: 16px;
        color: black;
        padding: 10px;
        outline: 0;

    }

    figure{
        width: 100%;
        margin-left: -0px;
        text-align: center;
    }

    figure > img{
        width: 232px;


    }

    button{
        width: 94px;
        height: 34px;
        background: #FFA800;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all 1s ease;
        border: 2px solid transparent;
    }
    button: hover{
        background: transparent;
        border: 2px solid #FFA800;
    }

    p{
        font-family: 'Roboto Mono';
        font-weight: 500;
        font-size: 15px;
        color: #000000;
        margin-bottom: 4px;
    }
    .Register-logo{
        margin-bottom: 20px;
        margin-top: 15px;
    }
`;
