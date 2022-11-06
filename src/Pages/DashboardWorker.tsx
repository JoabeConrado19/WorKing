import { CardClient } from "../Components/CardClient"
import { StyledDashboard } from "../styles/dashboardWorker"
import { Header } from "../Components/Header"
import { AsideComponent } from "../Components/Aside"

export const DashboardWorker = () => {

    return (
        <>
        <AsideComponent/>
        <Header/>
        
         <StyledDashboard>
                    <div className= "headerMain">
                        <h3>Lista de oportunidades</h3>
                        <button
                            className="btnFilter"
                            onClick={(event) => {
                                event.preventDefault()
                            }}
                        >
                            Filtrar Categoria
                        </button>
                    </div>
                    <div className="listCard">
                        <CardClient />
                        <CardClient />
                        <CardClient />
                        <CardClient />
                        <CardClient />
                        <CardClient />
                    </div>
                
            
         </StyledDashboard>
        </>
    )
}