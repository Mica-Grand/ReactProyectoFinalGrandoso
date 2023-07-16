import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer';





const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="¡Hola! Te damos la bienvenida a Pop Glam"
      />
    </>
  )
}

export default App
