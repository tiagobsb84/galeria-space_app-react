import { styled } from 'styled-components';
import EstiloGlobais from './components/EstiloGlobais';
import Cabecalho from './components/Cabecalho';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';

import bannerBackground from './assets/banner.png'

const FundoGradiente = styled.div`
  background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
  width: 100%;
  min-height: 100vh;
`;

function App() {

  return (
    <FundoGradiente>
      <EstiloGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner  
        texto='A galeria mais completa de fotos do espaço!'
        backgroudImage={bannerBackground}
      />
    </FundoGradiente>
  )
}

export default App
