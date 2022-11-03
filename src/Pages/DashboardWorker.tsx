import { CardClient } from "../components/CardClient/index"
import { StyledDashboard } from "../styles/dashboardWorker"
import { Header } from "../components/Header/index"
import { AsideComponent } from '../components/AboutUsPage/aside'


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