import React, { useState, Fragment, useContext } from 'react'
import FlickerContext from '../context/flicker/flickerContext'

const Groups = () => {

    const [formData, setFormData] = useState({
        group: ''
    });

    const flickerContext = useContext(FlickerContext);
    const { getGroups } = flickerContext;

    const onChange = e => {
        setFormData({
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        getGroups(formData);
        setFormData({
            group: ''
        })
    }

    const { group } = formData;

    return (
        <Fragment>
            <div className="container">
                <p className="flow-text">Search Groups</p>
            </div>
            <form onSubmit={onSubmit}>
            <div className="input-field">
                <input type="text" name='group' onChange={onChange} value={group}/>
                <label htmlFor="group">Search Group</label>
            </div>
            <div className="input-field">
                <button type="submit" className="btn green">Search</button>
            </div>
            </form>
        </Fragment>
    )
}

export default Groups
