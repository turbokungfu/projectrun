import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('rgba(45,66,77)')
  const [color2, setColor2] = useState('rgba(0,0,0)')
  function ColorChange() {
    const newColor1 = 0 + Math.floor(Math.random()*255)
    const newColor2 = 0 + Math.floor(Math.random()*255)
    const newColor3 = 0 + Math.floor(Math.random()*255)
    setColor(`rgba(${newColor1}, ${newColor2}, ${newColor3})`)
    setColor2(`rgba(${newColor2}, ${newColor3}, ${newColor1})`)
    console.log(newColor1, newColor2, newColor3)
  }
const [size, setSize] = useState('5rem')
function SizeChange(){
  const newSize = 1 + Math.floor(Math.random()*17)
  setSize(`${newSize}rem`)
}
  return (
    <div className='App' style={{backgroundColor: color }}>
      <header className="App-header" style={{color: color2}}>
        <button className='magic-button' onClick={()=>[ColorChange(), SizeChange()]}>Random Color</button>
        <h1>Watch this!</h1>
        <p style={{ fontSize: size }}>
          I'm trying to make the Background color and font size change.
        </p>
      </header>
    </div>
  );
}

export default App;
