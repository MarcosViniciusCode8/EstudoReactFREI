import { Link } from 'react-router-dom';
import './Index.scss';
import Aniversario from '../../components/data-aniversario';

export default function Components() {
  return (
    <div className="pagina-app">
      <nav>
        <h1>Página Principal</h1>
        <div className='paginas'>
          <h2>Outras páginas:</h2>
          <Link to="variavelestado">VarEstado</Link>
        </div>
      </nav>

      <main>
        <Aniversario/>
      </main>
    </div>
  );
}

