import React, { useState } from "react";
import { Dado } from "./components/Dado";

export default function Home() {
  const [dado, setDado] = useState(1);
  const [dado1, setDado1] = useState(1);
  const [lib,setLib] = useState(true);
  
  const handleClickJogar1 = () => {
    let valor = Math.floor(Math.random() * 6) + 1;
      while (valor === dado) {
        valor = Math.floor(Math.random() * 6) + 1;
      }
      setDado(valor);
      setLib(false);
    }

  const handleClickJogar2 = () => {
    let valor = Math.floor(Math.random() * 6) + 1;
      while (valor === dado1) {
        valor = Math.floor(Math.random() * 6) + 1;
      }
      setDado1(valor);
      setLib(true);}
  
  return (
    <div >
      <h1 className="title" id="titulo">Jogo do Dado</h1>

      <div className="principal">
        <div className="j1">
        <h2>Jogador 1</h2>
        <Dado valor={dado} />
        {lib === true ? <button onClick={handleClickJogar1}>Jogar</button> : <h3>Esperando a vez!</h3>}
        </div>

        <div className="j2">
        <h2>Jogador 2</h2>
        <Dado valor={dado1} />
        {!lib ? <button onClick={handleClickJogar2}>Jogar</button>: <h3>Esperando a vez!</h3>}
        </div>
      </div>  
    </div>
  );
}
