// import { Link } from "react-router-dom"
import Logo from "../../assets/WorKing-logo.png"
import { StyledHeaderNotFound } from "./style"
import { LinkStyled as Link} from "./style"

export const HeaderNotFound = () => {
    return (
        <StyledHeaderNotFound>
            <div className="componentsHeader">
                <img src={Logo} alt="Logo" />

                <Link to={"/"}>
                    <span>Voltar</span>
                </Link>

            </div>


        </StyledHeaderNotFound>
    )
}