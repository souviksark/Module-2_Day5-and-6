
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import News from './Pages/News';
import Products_page from './Pages/Products_page';
import MyCounter from './Pages/MyCounter';
import Contact from './Pages/Contact';
import Random from './Pages/Random';

function App() {
  return (
    <>
      <h1> use above Navigation to move different pages</h1>
      {/* set of rules */}
      <BrowserRouter>
        <Navigation />
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/news' element={ <News/> } />
              <Route path='/products' element={ <Products_page /> } />
              <Route path='/counter' element={ <MyCounter /> } />
              <Route path='/contact' element={ <Contact /> } />
              <Route path='/random' element={ <Random /> } />
          </Routes>
      </BrowserRouter>
    </>
  );
}
// custom error page
/* button */

export default App;
