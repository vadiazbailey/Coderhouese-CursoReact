import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './components/Error/Error';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenidos a Afrodita' />} />
            <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos a Afrodita' />} />
            <Route path="/item/:ID" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />           
            <Route path='/checkout' element={<Checkout />} />     
            <Route path="*" element={<Error message="Not found, Error 404"/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>   
    </div>
  );
}

export default App;
