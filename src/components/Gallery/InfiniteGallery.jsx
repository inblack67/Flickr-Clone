import React, { useContext, Suspense, useEffect, useRef } from 'react'
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

    const { photos, getSingleGroup, group, fetchPhotosFurther, getPhotosByGroup, loading } = flickerContext;

    const loader = useRef(fetchPhotosFurther);
    const observer = useRef(
      new IntersectionObserver(
        entries => {
          const first = entries[0];
          if (first.isIntersecting) {
            loader.current();
          }
        },
        { threshold: 1 }
      )
    );

    const more = true;

    const [element, setElement] = React.useState(null);

    useEffect(() => {
      loader.current = fetchPhotosFurther;
    }, [fetchPhotosFurther]);
  
    useEffect(() => {
      const currentElement = element;
      const currentObserver = observer.current;
  
      if (currentElement) {
        currentObserver.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          currentObserver.unobserve(currentElement);
        }
      };
    }, [element]);

    return (
        <div className='row'>
            { group && <p className="flow-text"><span className="red-text">{group.group.name._content}</span> Gallery</p> }

            <Suspense fallback={<Preloader />}>
            { photos && photos.map(photo => 
            <GalleryItem key={photo.id} photo={photo} />
            ) }
            </Suspense>

            {!loading && more && (
          <li ref={setElement} style={{ background: "transparent" }}></li>
            )}

        </div>
    )
}

export default Gallery
