import React, { useState, useEffect } from 'react';

import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App() {

  const [palabra, setPalabra] = useState('')
  const [resultado, setResultado] = useState([])

  const [currentpage, setCurrentPage] = useState(1)
  const [totalpages, setTotalPages] = useState(1)

  useEffect(()=>{

    const callApi = async () => {
      if(palabra==='') return

      const perPage = 30

      const key = '17437436-2a77f10fce051f4ed66c30961'
      const url = `https://pixabay.com/api/?key=${key}&q=${palabra}&per_page=${perPage}&page=${currentpage}`

      const request = await fetch(url)
      const result = await request.json()
      setResultado(result.hits)

      //calcula paginas totales
      const paginas = Math.ceil( result.totalHits / perPage )
      setTotalPages(paginas)

      //scroll al top
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({behavior:'smooth'})
    }
    callApi()
  }, [palabra, currentpage])

  const goBack = () => {
    if(currentpage === 1) return
    setCurrentPage( currentpage-1 )
  }

  const goNext = () => {
    if(currentpage === totalpages) return
    setCurrentPage(currentpage+1)
  }

  return (
    <div className="container">
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador Imagenes</p>
        
        <Formulario setPalabra={setPalabra}/>
      </div>

      <div className='row justify-content-center'>
        <ListadoImagenes imagenes={resultado}/>

        {(currentpage === 1) ? null :
        <div className='btn btn-primary mr-2' onClick={goBack}>Anterior</div>}
        
        {(currentpage === totalpages) ? null :
        <div className='btn btn-primary' onClick={goNext}>Siguiente</div>}
      </div>
    </div>
  );
}

export default App;
