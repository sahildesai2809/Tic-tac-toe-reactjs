import logo from './logo.svg';
import './App.css';
import TictacToe from "./container/tictactoe";
import Button from './components/buttons';
import Display from './components/display';


function App() {
  return(
    <div style={{textAlign:'center'}}> 
    
      <h3>tic tac toe</h3>
      <TictacToe/>
    </div>
  );
}

export default App;
