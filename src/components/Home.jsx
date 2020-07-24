import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <p className="flow-text">
                Welcome to React | Flickr
            </p>
            <Link to='/groups' className='btn red pulse'>Search Groups</Link>
        </Fragment>
    )
}

export default Home
