import React, { useState } from "react";
import { Dado } from "./components/Dado";
import Placar from "./components/Placar";

export default function Home() {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);
  const [vezDoJogador, setVezDoJogador] = useState(1); // 1 para jogador 1, 2 para jogador 2
  const [ponto1, setPonto1] = useState(0);
  const [ponto2, setPonto2] = useState(0);

  const rolarDado = (setDado) => {
    let novoDado = Math.floor(Math.random() * 6) + 1;
    setDado((prevDado) => {
      while (novoDado === prevDado) {
        novoDado = Math.floor(Math.random() * 6) + 1;
      }
      return novoDado;
    });
  };

  const handleClickJogar = () => {
    if (vezDoJogador === 1) {
      rolarDado(setDado1);
      setVezDoJogador(2);
    } else {
      rolarDado(setDado2);
      setVezDoJogador(1);
      verificarPontuacao();
    }
  };

  const verificarPontuacao = () => {
    if (dado1 > dado2) {
      setPonto1((prevPonto) => prevPonto + 1);
    } else if (dado2 > dado1) {
      setPonto2((prevPonto) => prevPonto + 1);
    }
  };

  return (
    <div>
      <h1 className="title" id="titulo">
        Jogo do Dado
      </h1>
      <Placar ponto1={ponto1} ponto2={ponto2} />

      <div className="principal">
        <div className="j1">
          <h2>Jogador 1</h2>
          <Dado valor={dado1} />
          {vezDoJogador === 1 ? (
            <button onClick={handleClickJogar}>Jogar</button>
          ) : (
            <h3>Esperando a vez!</h3>
          )}
        </div>

        <div className="j2">
          <h2>Jogador 2</h2>
          <Dado valor={dado2} />
          {vezDoJogador === 2 ? (
            <button onClick={handleClickJogar}>Jogar</button>
          ) : (
            <h3>Esperando a vez!</h3>
          )}
        </div>
      </div>
    </div>
  );
}
