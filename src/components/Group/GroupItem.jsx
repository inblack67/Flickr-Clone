import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import FlickerContext from '../../context/flicker/flickerContext'

const GroupItem = ({ group: { name, nsid, iconfarm, iconserver }, history }) => {

    const flickerContext = useContext(FlickerContext);

    const { getPhotosByGroup } = flickerContext;

    const onClick = e => {
        getPhotosByGroup(nsid);
        history.push(`/gallery/${nsid}`);
    }

    return (
        <div className="col m6 s6 l6">
            <div className="card black white-text">
                <div className="card-content">
                <div className="container center">
                <img src={`https://farm${iconfarm}.staticflickr.com/${iconserver}/buddyicons/${nsid}.jpg`} style={{height: '80px', width: '80px'}} className='responsive-img' alt=""/>
                </div>
                    <span className="card-title">
                        { name }
                    </span>
                    <div className="card-action">
                        <button  className='btn red' onClick={onClick}>Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

GroupItem.propTypes = {
    group: PropTypes.object.isRequired,
}

export default memo(withRouter(GroupItem));