import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos a Afrodita' />} />
          <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos a Afrodita' />} />
          <Route path="/detail/:ID" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
