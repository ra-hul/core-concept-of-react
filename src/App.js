import logo from './logo.svg';
import './App.css';

function App() {
  // dynamically creating components 

  // making array of objects

  const products = [
    { name: 'mobile', price: 15000 },
    { name: 'watch', price: 5000 },
    { name: 'laptop', price: 55000 },
    { name: 'shoes', price: 1500 }
  ]

  // dynamically sending the request for showing data in the screen
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/* Manually creating components */}

      {/* <Product name="mobile" price="15000"></Product>
      <Product name="Laptop" price="55000"></Product>
      <Product name="watch" price="5000"></Product>
      <Product name="shoes" price="1500"></Product> */}

    </div>
  );
}

function Product(props) {

  const productStyle = {
    border: '2px blue solid'
  }
  return (
    <div className="product" style={productStyle}>
      <h1>Name: {props.name}</h1>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

export default App;
