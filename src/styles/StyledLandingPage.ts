import styled from "styled-components";


export const StyledLandingPage = styled.div`
    width: 100%;
    min-height: 100vh;

    background-color: #F4F4F4;

    .divMobile{
        display: none;
    }

    header{
        height: 10vh;

        padding: 0 5vw;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid black;

        figure{
            height: 95%;
            img{
                max-height: 100%;
            }
        }

        .headerLinks{
            font-size: 16px;
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        
            a{
                margin-right: 5px;
            }
        }
    }
    main{
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        .landingPageTexts{
            padding-top: 2vh;
            height: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            
            h1{
                font-size: 40px;
                span{
                    color: #FFA800;
                }
                animation: typing 2s, blink-caret .75s step-end infinite;
                overflow: hidden;
                border-right: 0.15em solid orange;
                white-space: nowrap;

                height: 45px;
                margin-left: 0px;

            }
            

            h2{
                font-size: 28px;
                font-weight: 300;
            }
            
            h4{
                text-align: center;
                font-size: 16px;
                width: 30%;
            }
        }
        
        figure{
            height: 50%;
            display: flex;
            align-items: flex-end;
            img{
                max-height: 100%;
                max-width: 100%;
            }
        }
    }

   
    @media (max-width: 900px){
        main{
            .landingPageTexts{
                height: 50%;
            }
            figure{
                height: 50%;
            }
        }
    }
    @media (max-width: 700px){
        main{
            .landingPageTexts{
                height: 60%;
            }
            figure{
                height: 40%;
            }
        }
    }
    @media (max-width: 550px){
        header, main{
            display: none;
        }
        .divMobile{
            margin: 0 auto;

            height: 100vh;
            
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            
            text-align: center;

            figure{
                width: 60%;
                img{
                    width: 100%;
                }
            }

            h4{
                width: 70%;
                span{
                    color: #FFA800;
                }
            }

            div{
                p{
                    margin-bottom: 5px;
                    font-size: 12px;
                }
                img{
                    max-height: 30px;
                }
            }
            
            a{
                font-size: 12px;
            }
        }
    }

    @keyframes typing {    from { width: 0 }    to { width: 57.8% }  }
  @keyframes blink-caret {    from, to { border-color: transparent }    10% { border-color: #FFA800; }  }
` 