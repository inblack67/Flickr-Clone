import React, { Suspense, useEffect } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'
import M from 'materialize-css/dist/js/materialize';

const GalleryItem = ({ photo: { farm, server, id, secret, title, ownername } }) => {

    return (
        <div className='col s6 m6 l6'>
            <div className="card">
            <Suspense fallback={<Preloader />}>
                <div className="card-image">
                    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt=""/>
                </div>
                <div className="card-content">
                    <span className="red-text">
                    <strong>{title}</strong>
                    </span>
                    <p>By {ownername}</p>
                </div>
            </Suspense>
            </div>
        </div>
    )
}

GalleryItem.propTypes = {
    photo: PropTypes.object.isRequired,
}

export default GalleryItem
