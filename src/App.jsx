import { styled } from 'styled-components';
import EstiloGlobais from './components/EstiloGlobais';
import Cabecalho from './components/Cabecalho';

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
    </FundoGradiente>
  )
}

export default App
