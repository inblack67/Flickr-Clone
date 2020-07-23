import React, { Fragment } from 'react'

const Preloader = () => {
    return (
    <Fragment>
        <div className="container">
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
        </div>
    </Fragment>
    )
}

export default Preloader
