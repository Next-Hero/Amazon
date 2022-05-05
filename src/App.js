import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
// import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
