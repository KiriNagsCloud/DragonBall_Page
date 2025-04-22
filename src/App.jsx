import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import Pagina01 from './components/Pagina01';
import Pagina02 from './components/Pagina02';
import Req from './components/Req'; // importa a página da API

function App() {
  return (
    <>
      <Menu 
        option01="Início" 
        option02="Seção" 
        option03="Contato" 
        option054="Personagens"
      />
      <Routes>
        <Route path="/" element={<Pagina01 />} />
        <Route path="/requisicao" element={<Pagina02 />} />
        <Route path="/dragonball" element={<Req />} />
      </Routes>
    </>
  );
}

export default App;
