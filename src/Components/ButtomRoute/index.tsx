import { ContainerBtnRoute } from "./style"
export const ButtomRoute = () => {

    return (
    
      <ContainerBtnRoute>
                <button
                    className="btnRoute"
                    onClick={(event) => {
                        event.preventDefault()
                    }}
                >
                    Gerar rota
                </button>
            </ContainerBtnRoute>
    
    )
    }