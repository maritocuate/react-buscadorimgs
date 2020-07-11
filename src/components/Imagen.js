import React from 'react';

const Imagen = ({imagen}) => {

    const {previewURL, tags} = imagen

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>

                <img className='card-img-top' alt={tags} src={previewURL}/>
            </div>
        </div>
    );
}
 
export default Imagen;