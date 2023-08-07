import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>
        <Route path='/projects' exact element={<Projects/>}></Route>
        <Route path='/education' exact element={<Education/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
