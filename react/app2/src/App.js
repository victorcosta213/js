import React, { useState } from 'react';

function App() {
  const [numero, setNumeroAleatorio] = useState(12);

  const gerarNumeroAleatorio = () => {
    const novoNumero = Math.floor(Math.random() * 10);
    setNumeroAleatorio(novoNumero);
  };

  return (
    <div>
      <h1>Número: {numero}</h1>
      <button onClick={gerarNumeroAleatorio}>Apertar</button>
    </div>
  );
}

export default App;
