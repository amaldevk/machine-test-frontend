import logo from './logo.svg';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/menubutton' element={<MenuButton/>}/>
        <Route path='/footer' element={<Footer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
