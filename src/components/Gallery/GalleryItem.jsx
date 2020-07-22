import React, { Suspense, useEffect } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'
import M from 'materialize-css/dist/js/materialize';

const GalleryItem = ({ photo: { farm, server, id, secret } }) => {

    return (
        <div className='col s6 m6 l6'>
            <Suspense fallback={<Preloader />}>
                <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt=""/>
            </Suspense>
        </div>
    )
}

GalleryItem.propTypes = {
    photo: PropTypes.object.isRequired,
}

export default GalleryItem
