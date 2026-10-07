import './Index.scss';
import { useState } from 'react';

export default function VarEstado() {
    const [texto1, setTexto1] = useState("")
    const [texto2, setTexto2] = useState("")
    const [cor, setCor] = useState("")
    const [check, setCheck] = useState(false)
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function pegarTexto(e) {
        setTexto1(e.target.value);
    }


    function usarTexto() {
        setTexto2(texto1)
    }

    function MudarCheck(e) {
        setCheck(e.target.checked)
    }

    function soma() {
        let soma = Number(num1) + Number(num2)
        setResultado(soma)
    }

    function sub() {
        let sub = Number(num1) - Number(num2)
        setResultado(sub)
    }
    
    function divi() {
        let divi = Number(num1) / Number(num2)
        setResultado(divi)
    }

        function multi() {
        let multi = Number(num1) * Number(num2)
        setResultado(multi)
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
                <p>O Robson adora a Info C? {check ? "Sim" : "Não"} <br /></p>
                <input type="checkbox" onChange={MudarCheck} />
            </section>

            <section className="ex">
                <h1>Calculadora:</h1>

                <input type="text" placeholder='Número 1' onChange={(e) => setNum1(e.target.value)} />
                <input type="text" placeholder='Número 2' onChange={(e) => setNum2(e.target.value)} />
                <p>{resultado}</p>
                <button onClick={soma}>Soma</button>
                <button onClick={sub}>Subtração</button>
                <button onClick={divi}>Divisão</button>
                <button onClick={multi}>Multiplicação</button>
            </section>
        </div>
    );
}
