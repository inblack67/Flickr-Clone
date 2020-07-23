import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'

const GalleryItem = ({ photo: { farm, server, id, secret, title, ownername } }) => {

    return (
        <div className='col s12 m6 l6'>
            <div className="card grey darken-4">
            <Suspense fallback={<Preloader />}>
                <div className="card-image">
                    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt=""/>
                </div>
                <div className="card-content">
                    <h5>
                    <strong>{title}</strong>
                    </h5>
                    <h6 className="red-text">
                    {ownername}
                    </h6>
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
