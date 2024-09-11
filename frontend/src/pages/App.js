import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from '../services/principal'; // Ajuste o caminho se necessário
import Login from '../services/login'; // Ajuste o caminho se necessário
import Cadastro from '../services/cadastro'; // Ajuste o caminho se necessário
import Configuracoes from '../services/config';
import Acervo from '../services/acervo';
import RecoverPassword from '../services/recuperar';
import BookDetails from '../services/Livro';
import CadastroLivro from '../services/livrosADM';

// Paginas logadas
import PrincipalLO from '../services/Logados/principalLO'
import AcervoLO from '../services/Logados/acervoLO'
import BookDetailsLO from '../services/Logados/livroLO'
import ConfiguracoesLO from '../services/Logados/configLO'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/acervo" element={<Acervo />} /> 
        <Route path="/recuperar-senha" element={<RecoverPassword />} />
        <Route path="/livro/1" element={<BookDetails />} />
        <Route path="/apilivro" element={<CadastroLivro />} />
        <Route path="/homeL" element={<PrincipalLO />} />
        <Route path="/acervoL" element={<AcervoLO />} />
        <Route path="/configuracoesL" element={<ConfiguracoesLO />} />
        <Route path="/livroL/1" element={<BookDetailsLO />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>

  );
};

export default App;