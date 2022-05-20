import './App.css';
import ts from './assets/background/ts.svg'
import js from './assets/background/js.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ts} alt="" style={{width: "35px"}}/>
        <img src={js} alt="" style={{width: "35px"}}/>
      </header>
    </div>
  );
}

export default App;
