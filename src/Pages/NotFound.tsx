import { StyledNotFound } from "../styles/notFound"
import { HeaderNotFound } from "../Components/HeaderNotFound"
import Imagem from "../assets/Erro-404.jpg"


export const NotFound =() => {


    return(
        <StyledNotFound>
<>
<HeaderNotFound/>
<img src={Imagem} alt="Image not found"  className="backImage"/>

</>
</StyledNotFound>
    )
}