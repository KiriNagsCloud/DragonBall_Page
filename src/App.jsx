import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import Pagina01 from './components/Pagina01';
import Pagina02 from './components/Pagina02';

function App() {
  return (
    <>
      <Menu 
        option01="Início" 
        option02="Seção" 
        option03="Contato" 
        option04="API DragonBall" 
        option05="Personagens"
      />
      <Routes>
        <Route path="/" element={<Pagina01 />} />
        <Route path="/requisicao" element={<Pagina02 />} />
      </Routes>
    </>
  );
}

export default App;
