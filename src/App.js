import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}

// will show a counter with a button if we increase that the number of counter will increase and counter value will decrease
// second way , optimized

function Counter() {

  const [count, setCount] = useState(10);
  const handleIncrease = () => { setCount(count + 1) };
  const handleDecrease = () => { setCount(count - 1) };


  return (
    <div >
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

// one way

//  function Counter() {

//   const [count, setCount] = useState(10);
//   const handleIncrease = () => {
//     const newCount = count + 1;
//     setCount(newCount);
//   };

//   const handleDecrease = () => {
//     const preCount = count - 1;
//     setCount(preCount);
//   }

export default App;
