import './Index.scss';
import { useState } from 'react';

export default function VarEstado() {
    const [texto1, setTexto1] = useState("")
    const [texto2, setTexto2] = useState("")
    const [cor, setCor] = useState("")
    const[check, setCheck] = useState(false)

    function pegarTexto(e) {
        setTexto1(e.target.value);
    }


    function usarTexto() {
        setTexto2(texto1)
    }

    function MudarCheck(e){
        setCheck(e.target.checked)
    }

    return (
        <div className="pagina-varEstado">
            <h1>Exercicos</h1>
            <section className="ex">
                <input type="text" onChange={pegarTexto} />
                <p>{texto2}</p>
                <button onClick={usarTexto}>Enviar texto</button>
            </section>

            <section className="ex">
                <input type="color" onChange={(e) => setCor(e.target.value)} />

                <div className='resultado' style={{ backgroundColor: cor }}>
                    <p>A cor que voce escolheu foi {cor}</p>
                </div>

            </section>


            <section className="ex">
                <p>O Robson adora a Info C? {check ?"Sim" : "Não"} <br/></p>
                <input type="checkbox" onChange={MudarCheck} />
            </section>
        </div>
    );
}
