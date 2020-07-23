import React, { Suspense, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'
import M from 'materialize-css/dist/js/materialize.min.js';

const GalleryItem = ({ photo: { farm, server, id, secret, title, ownername } }) => {


    return (
        <div className={`col s6 l6 m6`}>
            <div className="card">
            <Suspense fallback={<Preloader />}>
                <div className="card-image">
                    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt=""/>
                </div>
                <div className="card-content">
                    <span className="red-text">
                    <strong>{title}</strong>
                    </span>
                    <p>By 
                        <span className="blue-text">
                        {ownername}
                        </span>
                    </p>
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
