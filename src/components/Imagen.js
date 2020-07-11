import React from 'react';

const Imagen = ({imagen}) => {

    const {largeImageURL, previewURL, tags, likes, views} = imagen

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img className='card-img-top' alt={tags} src={previewURL}/>
                <div className='card-body'>
                    <div className='card-text'>{likes} Likes</div>
                    <div className='card-text'>{views} Views</div>
                </div>
                <div className='card-footer'>
                    <a
                        href={largeImageURL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-block'
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;