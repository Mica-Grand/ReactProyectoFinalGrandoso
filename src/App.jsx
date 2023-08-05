import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';






const App = () => {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        
        <Route exact path="/" element={<Home
                  greeting="Hi, beautiful! Get ready to glow with Pop Glam"
                  slogan="Discover the irresistible charm of your skin"
              />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
