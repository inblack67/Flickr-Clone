import React, { useContext, Suspense, useEffect } from 'react'
import FlickerContext from '../../context/flicker/flickerContext'
import Preloader from '../Preloader'
import GalleryItem from './GalleryItem'

const Gallery = ({ match }) => {

    useEffect(() => {
        // getSingleGroup(match.params.groupId);
        getPhotosByGroup(match.params.groupId)
        // eslint-disable-next-line
    },[])

    const flickerContext = useContext(FlickerContext);

    const { photos, getSingleGroup, getPhotosByGroup } = flickerContext;

    return (
        <div className='row'>
            { photos && photos.map(photo => 
            <GalleryItem key={photo.id} photo={photo} />
            ) }
            <Suspense fallback={<Preloader />}></Suspense>
        </div>
    )
}

export default Gallery
