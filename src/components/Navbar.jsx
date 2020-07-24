import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="red">
            <div className="nav-wrapper">
                <div className="container">
                    <Link className='brand-logo' to='/'>React | Flickr</Link>
                    <ul className="right">
                        <li className='hide-on-small-only'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/groups'>Groups</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
