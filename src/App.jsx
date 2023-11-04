import { useState } from 'react'
import Titulo from './componentes/titulo'
import Main from './componentes/Main'

function App() {


  return (
    <div className='w-full flex flex-col items-center'>
      <Titulo name = "Visualizador de imagen"/>
      <Main/>
    </div>
  )
}

export default App
