import { ButtomContact } from "../ButtomContact"
import { ButtomRoute } from "../ButtomRoute"
import {CardStyled} from "./style"

export const CardClient = () => {

    return (
        <CardStyled>
        <div className="card">
            <figure>
                <img src={require("../../assets/gps-mapa.jpg")} alt="mapa" />
            </figure>
            <div>
                <div className="cardProfile">
                    <div>
                        <h3>Nome do cliente</h3>

                    </div>
                   <span> Categoria </span>

                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt, ipsa consequatur accusamus omnis unde at sunt cum error pariatur rem nobis, iusto aliquid magnam dignissimos, eveniet quia vel est.</p>
            <div className="cardButtons">
                {/* <ButtomContact />
                <ButtomRoute /> */}
                 <button
                    className="btnContact"
                    onClick={(event) => {
                        event.preventDefault()
                    }}
                >
                    Entrar em contato
                </button>

                <button
                    className="btnRoute"
                    onClick={(event) => {
                        event.preventDefault()
                    }}
                >
                    Gerar rota
                </button>

            </div>
        </div>
        </CardStyled>
    )
    }