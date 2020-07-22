import React, { useContext, Suspense, useEffect } from 'react'
import FlickerContext from '../../context/flicker/flickerContext'
import Preloader from '../Preloader'
import GalleryItem from './GalleryItem'

const Gallery = ({ match }) => {

    useEffect(() => {
        getSingleGroup(match.params.groupId);
        getPhotosByGroup(match.params.groupId)
        // eslint-disable-next-line
    },[])

    const flickerContext = useContext(FlickerContext);

    const { photos, getSingleGroup, group, getPhotosByGroup } = flickerContext;

    return (
        <div className='row'>
            { group && <p className="flow-text"><span className="red-text">{group.group.name._content}</span> Gallery</p> }
            { photos && photos.map(photo => 
            <GalleryItem key={photo.id} photo={photo} />
            ) }
            <Suspense fallback={<Preloader />}></Suspense>
        </div>
    )
}

export default Gallery
