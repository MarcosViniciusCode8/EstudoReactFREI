import { Link } from 'react-router-dom';
import './App.scss';


export default function App() {
  return (
    <div className="pagina-app">
      <nav>
        <h1>Página Principal</h1>
        <div className='paginas'>
          <h2>Outras páginas:</h2>
          <Link to="variavelestado">VarEstado</Link>
        </div>
      </nav>
    </div>
  );
}

