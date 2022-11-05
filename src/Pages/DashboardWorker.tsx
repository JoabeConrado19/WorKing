import { CardClient } from "../Components/CardClient"
import { StyledDashboard } from "../styles/dashboardWorker"
import { Header } from "../Components/Header"

export const DashboardWorker = () => {

    return (
        <>
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