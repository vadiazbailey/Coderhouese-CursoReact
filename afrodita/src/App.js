import './App.css';
import NavBar from './components/NavBar/NavBar';
import Fondo from './assets/fondo.jpg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='imagenHome'>
        <img src={Fondo} alt='afrodita' />
      </div>
    </div>
  );
}

export default App;
