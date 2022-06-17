import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

import {PokeMonProvider} from './context/PokeMonContext'

function App() {
  return (
    <PokeMonProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <NavBar/>
          <main className='container mx-auto px-3 pb-15'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/notfound' element={<NotFound/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </PokeMonProvider>
  );
}

export default App;
