import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './pages/App/App.jsx';
import VarEstado from './pages/varEstado/Index.jsx';

export default function Nav(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/variavelestado" element={<VarEstado/>}/>
    </Routes>
    </BrowserRouter>
    )
}