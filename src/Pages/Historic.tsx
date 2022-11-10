import { AsideComponent } from "../Components/Aside"
import { CardHistoric } from "../Components/CardHistoric"
import { Header } from "../Components/Header"
import { StyledHistoric } from "../styles/historic"


export const Historic = () =>{
    return (
        <>
            <AsideComponent/>
            <Header/>
            <StyledHistoric>
                <div className="bodyHistoric">
                    <h2>Lista de serviços prestados:</h2>
                    <CardHistoric/>
                    <CardHistoric/>
                    <CardHistoric/>
                    <CardHistoric/>
                    <CardHistoric/>
                </div>
            </StyledHistoric>
        </>
    )
}