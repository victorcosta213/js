import {Letra} from "./components/Letra";
import {Numero} from "./components/Numero";

function App() {
  return (
    <div className="App">
      {Math.random() < 0.5 ? <Letra/> : <Numero/>}
    </div>
  ); 
}

export default App;
