import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>

    </div>
  );
}

// using the useEffect of react
// using api of json

// First of all we have to define the state of the react
function ExternalUsers() {
  // First of all we have to define the state of the react
  const [users, setUsers] = useState([]);

  // For loading the data we are using useEffect along with annonymous function and empty array

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])




  return (
    <div >
      <h2>External Users:</h2>
      {
        users.map(user => <Users name={user.name} email={user.email}> </Users>)
      }
    </div>
  );
}
function Users(props) {
  return (
    <div className='product'>
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>

  )
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

// second way
// const [count, setCount] = useState(10);
// const handleIncrease = () => { setCount(count + 1) };
// const handleDecrease = () => { setCount(count - 1) };
// button dynamic section
{/* <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button> */}
export default App;
