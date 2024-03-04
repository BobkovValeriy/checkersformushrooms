import './App.css';
import ChessBoard from './board/board';

function App() {
  return (
    <div className="App">
      <div>Left click to select</div>
      <div>Rigth click to move</div>
      <ChessBoard />
    </div>
  );
}

export default App;
