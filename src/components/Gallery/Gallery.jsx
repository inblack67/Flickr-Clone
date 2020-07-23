import React, { useContext, Suspense, useEffect } from 'react'
import FlickerContext from '../../context/flicker/flickerContext'
import Preloader from '../Preloader'
import GalleryItem from './GalleryItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../Loader'

const Gallery = ({ match }) => {

    useEffect(() => {
        getSingleGroup(match.params.groupId);
        getPhotosByGroup(match.params.groupId);
        // eslint-disable-next-line
    },[])

    const flickerContext = useContext(FlickerContext);

    const { photos, getSingleGroup, group, fetchPhotosFurther, getPhotosByGroup, loading } = flickerContext;

    const fetchMore = () => {
        fetchPhotosFurther(match.params.groupId);
    }

    if(loading){
        return <Loader />
    }

    return (
        <div className='row'>
            { group && <p className="flow-text">{group.group.name._content}</p> }
            <InfiniteScroll dataLength={photos.length} next={fetchMore} hasMore={true} loader={<Preloader />}>
            <Suspense fallback={<Preloader />}>
                 { photos && photos.map(photo => 
                    <GalleryItem key={photo.id} photo={photo} />
                ) }
            </Suspense>
            </InfiniteScroll>
        </div>
    )
}

export default Gallery
