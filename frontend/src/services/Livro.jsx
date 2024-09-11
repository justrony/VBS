import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import './css/livro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BookDetails = () => {
  const { id } = useParams(); 
  const [comments, setComments] = useState([
    { user: 'Usuário', text: 'Comentário.' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para controlar a visibilidade da sidebar

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: 'Usuário', text: newComment }]);
      setNewComment('');
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da sidebar
  };

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
              <Link className="nav-link" to="/acervo">Acervo</Link>
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
          <div className="container-livro">
            <div className="book-details">
              <img 
                src="https://cdn.discordapp.com/attachments/1216857927747371061/1283235633355165786/arq-comp.jpeg?ex=66e241d0&is=66e0f050&hm=6bca67691bbf8adf77e1234ae445d35827e47fcd6e4ad4cf53b4ca10a0826165&"
                alt="Capa do Livro" 
                className="book-cover"
              />
              <div className="details">
                <h1 className='h1-livro'>Arquitetura e Organização de Computadores</h1>
                <h2 className='h2-livro'>William Stallings</h2>
                <p className='p-livro'>
                Este livro oferece uma abordagem abrangente e detalhada dos fundamentos da arquitetura e organização de computadores, abordando tanto conceitos teóricos quanto aplicações práticas. Destinado a estudantes, profissionais e entusiastas da área de ciência da computação, o texto explora desde os princípios básicos da arquitetura de computadores até os sistemas avançados de organização e otimização.
                </p>
                <br />
              </div>
            </div>

            <div className="comments-section">
              <h3>Comentários</h3>
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <h4>{comment.user}</h4>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
           
            <div className="comment-form">
              <textarea 
                id="new-comment" 
                placeholder="Escreva seu comentário aqui..." 
                rows="4"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="button" onClick={handleAddComment}>
                Adicionar Comentário
              </button>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Virtual Bookshelf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default BookDetails;