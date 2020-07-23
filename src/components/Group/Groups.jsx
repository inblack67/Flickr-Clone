import React, { useState, Fragment, useContext } from 'react';
import FlickerContext from '../../context/flicker/flickerContext';
import GroupItem from './GroupItem';
import PieChart from './PieChart';

const Groups = () => {

    const [formData, setFormData] = useState({
        group: ''
    });

    const flickerContext = useContext(FlickerContext);
    const { getGroups, groups } = flickerContext;

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
            <PieChart />
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
            <div className="card">
                <div className="card-content">
                    <div className="row">
                        { groups && groups.map(group => <GroupItem key={group.nsid} group={group} />) }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Groups