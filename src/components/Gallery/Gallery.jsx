import React, { useContext, Suspense, useEffect } from 'react'
import FlickerContext from '../../context/flicker/flickerContext'
import Preloader from '../Preloader'
import GalleryItem from './GalleryItem'
import InfiniteScroll from 'react-infinite-scroll-component'

const Gallery = ({ match }) => {

    useEffect(() => {
        getSingleGroup(match.params.groupId);
        getPhotosByGroup(match.params.groupId);
        // eslint-disable-next-line
    },[])

    const flickerContext = useContext(FlickerContext);

    const { photos, getSingleGroup, group, fetchPhotosFurther, getPhotosByGroup } = flickerContext;

    const fetchMore = () => {
        fetchPhotosFurther(match.params.groupId);
    }

    return (
        <div className='row'>
            { group && <p className="flow-text"><span className="red-text">{group.group.name._content}</span> Gallery</p> }
            <InfiniteScroll dataLength={photos.length} next={fetchMore} hasMore={true} loader={<Preloader />}>
            { photos && photos.map(photo => 
            <GalleryItem key={photo.id} photo={photo} />
            ) }
            </InfiniteScroll>
            <Suspense fallback={<Preloader />}></Suspense>
        </div>
    )
}

export default Gallery
