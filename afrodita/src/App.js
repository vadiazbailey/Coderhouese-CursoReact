import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos a Afrodita' />} />
          <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos a Afrodita' />} />
          <Route path="/item/:ID" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error message="Not found, Error 404"/>} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
