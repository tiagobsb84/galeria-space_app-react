import styled from "styled-components";

const CampoPesquisar = styled.input`
        border-radius: 10px;
        border: 2px solid var(--Degrad-com-rosa, #C98CF1);
        padding: 12px 16px;
        width: 602px;
        height: 50px;
        background-color: transparent;

        color: #D9D9D9;
        font-family: Gandhi Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 100% */

        position: relative;     
`;

const ImagemLupa = styled.img`
    position: absolute;
    right: 0;
`;

const CampoTexto = () => {
    return(
        <>
            <CampoPesquisar type="search" placeholder="O que você está procurando?" />
            <ImagemLupa src="/imagens/search.png" alt="lupa" />
        </>
        
    )
}

export default CampoTexto;