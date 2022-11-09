import styled from "styled-components";

export const StyledForm = styled.form`
            background-color: #F5F5F5;
            height: 150px;
            justify-content: space-around;
            display: flex;
            flex-direction: column;

            border-radius: 8px;
            width: 90%;
            margin: 0 auto;
            margin-bottom: 1rem;

        textarea{
            width: 95%;
            margin: 0 auto;
            border-radius: 8px;
            text-align: left;
            background-color: #A1A1A1;
            color: black;
            font-weight: 700;
            outline: 0;
            height: 180px;
            padding: 10px;
        }

        div{
            display: flex;
            width: 100%;
            justify-content: space-around;

        select{
            width: 40%;
            border-radius: 8px;
            background-color: #A1A1A1;
            color: black;
            font-weight: 700;

        }

        input{
            width: 50%;
            padding: 5px;
            border-radius: 8px;
            color: black;
            font-weight: 700;
            background-color: #A1A1A1;
        }


        .publish{


            border: 1px solid  #3B925F;
            background-color:  #3B925F;
            color: white;
            border-radius: 10px;
            width: 100px;
            margin: 0px 3px 4px 0px  ;
            align-self:flex-end;
            padding: 4px;

        }

            .description {
            display: flex;
            height: 50%;
            width: 90% !important;
            margin: 0 auto;
            border-radius: 8px;
            background-color: #A1A1A1;
            flex-direction: column;
}
    }
    `