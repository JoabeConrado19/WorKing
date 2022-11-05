import {ContainerBtnContact} from "./style"
<style></style>
export const ButtomContact = () => {

    return (
    
            <ContainerBtnContact>
                <button
                    className="btnContact"
                    onClick={(event) => {
                        event.preventDefault()
                    }}
                >
                    Entrar em contato
                </button>
            </ContainerBtnContact>
    
    )
    }