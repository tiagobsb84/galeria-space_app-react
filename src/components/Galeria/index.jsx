import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const ImagemContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const SecaoFuida = styled.section`
    flex-grow: 1;
`;

const Galeria = ({ fotos = [], aoSelecionaFoto }) => {
    return(
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFuida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagemContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSelecionado={aoSelecionaFoto}
                            key={foto.id}
                            foto={foto}
                        />)}
                    </ImagemContainer>
                </SecaoFuida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;