// import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import ArrayPrac from './components/array-and-objects/ArrayPrac';
import Counter from './components/states/counter';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Header emoji="😊" />
      <ArrayPrac />
      <br />
      <Counter />
    </div>
  );
}

export default App;
