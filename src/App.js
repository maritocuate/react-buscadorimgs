import React, { useState, useEffect } from 'react';

import Formulario from './components/Formulario'

function App() {

  const [palabra, setPalabra] = useState('')
  const [resultado, setResultado] = useState('')

  useEffect(()=>{

    const callApi = async () => {
      if(palabra==='') return

      const key = '17437436-2a77f10fce051f4ed66c30961'
      const url = `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo`

      const request = await fetch(url)
      const result = await request.json()
      setResultado(result.hits)
    }
    callApi()
  }, [palabra])

  return (
    <div className="container">
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador Imagenes</p>
        
        <Formulario setPalabra={setPalabra}/>
      </div>
    </div>
  );
}

export default App;
