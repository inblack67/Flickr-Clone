import React, { useContext, Suspense, useEffect } from 'react'
import FlickerContext from '../../context/flicker/flickerContext'
import Preloader from '../Preloader'
import GalleryItem from './GalleryItem'
import InfiniteScroll from 'react-infinite-scroller'
import Loader from '../Loader'

const Gallery = ({ match }) => {

    useEffect(() => {

        let mounted = true;

        if(mounted){
            getSingleGroup(match.params.groupId);
            getPhotosByGroup(match.params.groupId);
        }

        return () => {
            mounted = false;
        }

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
            <InfiniteScroll pageStart={0} loadMore={fetchMore} hasMore={true} loader={<Preloader key={0} />}>
            <Suspense fallback={<Preloader />}>
                <div className="grid-container">
                 { photos && photos.map(photo => 
                    <GalleryItem key={photo.id} photo={photo} />
                ) }
                </div>
            </Suspense>
            </InfiniteScroll>
        </div>
    )
}

export default Gallery
