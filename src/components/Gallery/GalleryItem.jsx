import React, { Suspense, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'
import MCSS from 'materialize-css/dist/js/materialize';

const GalleryItem = ({ photo: { farm, server, id, secret, title, ownername } }) => {

    const boxedImage = useRef();

    useEffect(() => {
        MCSS.Materialbox.init(boxedImage.current);
    }, [boxedImage])

    return (
        <div className='col s12 l4 m6'>
            <div className="card small grey darken-4">
            <Suspense fallback={<Preloader />}>
                <div className="card-image" >
                    <img ref={boxedImage} className='materialboxed responsive-img' src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
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
