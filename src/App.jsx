import { styled } from 'styled-components';
import EstiloGlobais from './components/EstiloGlobais';
import Cabecalho from './components/Cabecalho';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';

import bannerBackground from './assets/banner.png'
import Galeria from './components/Galeria';

import fotos from './fotos.json';
import { useState } from 'react';
import ModalZoom from './components/ModalZoom';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <EstiloGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto='A galeria mais completa de fotos do espaço!'
              backgroudImage={bannerBackground}
            />
            <Galeria 
              fotos={fotosDaGaleria} 
              aoSelecionaFoto={foto => setFotoSelecionada(foto)} 
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada} 
        aoFechar={() => setFotoSelecionada(null)} 
      />
    </FundoGradiente>
  )
}

export default App
