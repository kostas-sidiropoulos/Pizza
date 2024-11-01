import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
