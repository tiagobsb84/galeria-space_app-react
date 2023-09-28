import styled from 'styled-components';
import tags from './tags.json';

const AlinhamentoTags = styled.div`
    display: flex;
    gap: 24px;
    text-align: center;
    align-items: center;
    justify-content: center;

    button {
        border-radius: 10px;
        border: none;
        background: rgba(217, 217, 217, 0.30);
        
        padding: 10px 8px;

        color: #FFF;
        text-align: center;
        font-family: Gandhi Sans;
        font-size: 24px;
        font-weight: 400;
    }
`;

const Paragrafo = styled.p`
    color: #D9D9D9;
    font-family: Gandhi Sans;
    font-size: 24px;
    font-weight: 400;
`;

const Tags = () => {
    return(
        <AlinhamentoTags>
            <Paragrafo>Busque por tags:</Paragrafo>
            {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)} 
        </AlinhamentoTags>
    )
}

export default Tags;