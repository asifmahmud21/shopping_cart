import Header from './Components/Header/Header'
import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';

function App() {
  return (
   <BrowserRouter>
     <Header />
     <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route path="/cart" exact element={<Cart/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
