import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelection = (category) => {
    console.log('categoryApp', category);
    setSelectedCategory(category);
  };

  console.log('selectedCategoryApp', selectedCategory);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar onSelectedCategoryPadre={handleCategorySelection}/>
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
