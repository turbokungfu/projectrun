import logo from './logo.svg';
import './styles.css';

function App() {
  return(
  <div className="calculator-grid">
    <div className="output">
    <div className="previous-operand">123,234 *</div>
    <div className="current-operand">123,234</div>
    </div>
    <button className="span-two">AC</button>
    <button>Del</button>
    <button>/</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>X</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className="span-two">=</button>
  </div>
  )
}

export default App;
