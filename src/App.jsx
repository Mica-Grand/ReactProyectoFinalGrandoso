import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';





const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="¡Hola! Preparate para brillar con Pop Glam"
      slogan="Descubre el encanto irresistible de tu piel"
      />
    </>
  )
}

export default App
