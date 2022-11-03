import styled from "styled-components";


export const StyledBody = styled.body`
display: flex;
flex-direction: column;
background-color: #A1A1A1;

@media (min-width: 768px) {

    flex-direction: row;
}

`


export const StyledClientDash = styled.div`

        background-color: #A1A1A1;
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 100%;
        margin: 0 auto;

    header{

        padding: 10px 0;
        display: flex;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 15px;
        justify-content: flex-start;
        column-gap: 30%;


    svg{
        font-size: 28px;
    }

    h1{
        font-size: 25px;
    }

    }

    .input-div{
        display: flex;
        flex-direction: column;


        h2{
        padding: 8px;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 1rem;
    }

    input{
        padding: 8px;
        border-radius: 8px;
        width: 90%;
        margin: 0 auto;
    }
    }

    ul{
        display: flex;
        flex-direction: column;
        overflow-y: auto;

    }

    .conteiner{
        border-radius: 8px;
        background-color: #ffff;
        height: 100%;
        justify-content: space-evenly;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        row-gap: 30px;
        margin-bottom: 1rem;
        min-height: 280px;
        max-width: 430px;

    .top-conteiner{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        border-bottom: 1px solid;
        width: 100%;

        h3{
            font-size: 14px;
        }

        span{
        font-size: 12px;
        border: 2px solid;
        border-radius: 10px;
        font-weight: 700;
        padding: 5px;
        margin-bottom: 3px;
        background-color: transparent;


    }


    }

    .conteudo{
        row-gap: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .div-categoria{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;



    button{
        display: flex;
        width: 100px;
        justify-content: space-around;
        padding: 5px;
        border-radius: 8px;
        background-color: #FFA800;



        svg{
            font-size: 13px;
        }
    }

    .delete{
        background-color: red;
    }

    }

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 7px;

    p{
        font-size: 13px;
    }

    }

    svg{
        font-size: 32px;
        margin: 3px;
    }
    }


    @media(min-width: 540px){

    header{
        column-gap: 38%;
    }




    }


    @media(min-width: 768px){


    header{
            column-gap: 45%;

            svg{
                display: none;
            }
        }


        main{

            .input-div{


                h2{
                    padding: 5px;
                text-align : left ;
                margin-left: 4rem;
                }
            }


            ul{
                flex-direction: row;
                flex-wrap: wrap;
                overflow-y: auto;
                max-height: 500px;

                .conteiner{
                  width: 40%;


.div-categoria{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
margin-top: 10px;

    button{

        padding: 5px;
        border-radius: 8px;
        background-color: #FFA800;
    }

    .delete{
        background-color: red;
    }
}

                }
            }


        }


    }

    @media(min-width: 1260px){
        ul{
            margin: 0 auto;
            max-width: 93.6%;
        }
    }


    @media(min-width: 1480px){


        main{
            ul{
                column-gap: 20px;
                .conteiner{
                    min-width: 570px;
                    width: 50%;

                }
            }
        }


    }
    `


export const StyledAside = styled.aside`
    display: none;


    @media (min-width: 768px) {
    display: flex;
    position: fixed;
    background-color: #FFA800;
    width: 60px;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    svg{
        font-size: 40px;

    }
    }
    `


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

