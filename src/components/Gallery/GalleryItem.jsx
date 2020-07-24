import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'

const GalleryItem = ({ photo: { farm, server, id, secret, title, ownername } }) => {

    return (
        <div className='col s12 l4 m6'>
            <div className="card small grey darken-4">
            <Suspense fallback={<Preloader />}>
                <div className="card-image" >
                    <img className='responsive-img' src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt=""/>
                </div>
                <div className="card-content">
                    <h6>
                    <strong>{title}</strong>
                    <br/><br/>
                    <span className="red-text">
                    {ownername}
                    </span>
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
