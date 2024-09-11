import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './css/acervo.css';
import './css/principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Acervo() {
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para controlar a visibilidade da sidebar

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da sidebar
  };

  const books = [
    { id: 1, title: 'Arquitetura e Organização de Computadores', category: 'Arquitetura de Computadores', imgSrc: 'https://cdn.discordapp.com/attachments/1216857927747371061/1283235633355165786/arq-comp.jpeg?ex=66e241d0&is=66e0f050&hm=6bca67691bbf8adf77e1234ae445d35827e47fcd6e4ad4cf53b4ca10a0826165&' },
    { id: 2, title: 'Introdução A Programação Orientada A Objetos Usando Java', category: 'Programação Orientada a Objeto', imgSrc: 'https://cdn.discordapp.com/attachments/1216857927747371061/1283249282182283316/51AM3bdWKgL.png?ex=66e24e86&is=66e0fd06&hm=3cb2e80e2528953987aa42a46ea075cc5bd148126695375ee0a839bbd3319913&' },
    { id: 3, title: 'Fundamentos de Física - Mecânica Volume 1', category: 'Física', imgSrc: 'https://cdn.discordapp.com/attachments/1216857927747371061/1283249680863727699/4.png?ex=66e24ee5&is=66e0fd65&hm=93956b9ac5df5102d13cb06c5c65463145f498b7ed717afd8e75eac39bf4ae1f&' },
    { id: 4, title: 'Estatística Fácil', category: 'Probabilidade e estatística', imgSrc: 'https://cdn.discordapp.com/attachments/1216857927747371061/1283250371304882186/Antonio-Arnot-Crespo-Estatistica-Facil-Ed-Saraiva-2009-pdf-1-320.png?ex=66e24f8a&is=66e0fe0a&hm=005b9b8c07af860397375b7ce38f2be5fad2ecebff97f255509bf65052773431&' }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="text-white d-flex justify-content-between align-items-center py-3 px-4">
        <div className="d-flex align-items-center col-1">
          <button 
            type="button" 
            className="btn" 
            id="toggleButton" 
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} size="3x" />
          </button>
          <div className="logo">
            <img 
              src="https://cdn.discordapp.com/attachments/1216857927747371061/1282115038949408790/lw-logo.png?ex=66de2e2d&is=66dcdcad&hm=1a695010346ed6efa40e3ea4891e9996a4ee24a5cfa90d8008a6c4c271270678&"
              alt="Logo" 
            />
          </div>
        </div>
        <div className="search-bar">
          <form className="d-flex">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar" 
              aria-label="Buscar" 
            />
            <button className="btn btn-outline-light border border-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </header>

      <div className="d-flex flex-grow-1">
        <nav className={`sidebar p-3${sidebarVisible ? '' : ' d-none'}`} id="sidebar" style={{ minWidth: '200px' }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">Acervo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/configuracoes">Configurações</Link>
            </li>
            <li>
              <Link to="/login" className="btn btn-outline-light border border-light mt-3">Login</Link>
            </li>
          </ul>
        </nav>

        <main className="content flex-grow-1 p-4">
          <div className="container-acervo mt-2">
            <h2>Catálogo de Livros</h2>
            <p>Confira nossos lançamentos futuros e faça o download.</p>
            <div className="row">
              {books.map(book => (
                <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card shadow-sm mb-4">
                    <img 
                      src={book.imgSrc} 
                      className="card-img-top" 
                      alt={`Capa do Livro ${book.title}`} 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-category">Categoria: {book.category}</p>
                      <Link to={`/livro/${book.id}`} className="btn btn-acervo-primary">Ver mais</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Virtual Bookshelf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Acervo;