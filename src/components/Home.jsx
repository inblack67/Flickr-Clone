import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <p className="flow-text">Welcome to React | Flicker</p>
            <Link to='/groups' className='btn blue pulse'>Groups</Link>
        </Fragment>
    )
}

export default Home
