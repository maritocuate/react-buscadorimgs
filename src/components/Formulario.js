import React, { useState } from 'react';

import Error from './Error'

const Formulario = ({setPalabra}) => {

    const [busqueda, setBusqueda] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if(busqueda.trim() === ''){
            setError(true)
        }else{
            setError(false)
            setPalabra(busqueda)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Buscar una imagen, ej: fútbol'
                        onChange={ e => setBusqueda(e.target.value) }
                    />
                </div>
                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                    />
                </div>
            </div>
            {error ? <Error msg='Ingrese una busqueda'/> : null}
        </form>
    );
}
 
export default Formulario;