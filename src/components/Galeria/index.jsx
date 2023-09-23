import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFuida = styled.section`
    flex-grow: 1;
`;

const Galeria = () => {
    return(
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFuida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFuida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;