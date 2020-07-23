import React, { useState, useEffect, useRef, Fragment, useContext } from 'react';
import FlickerContext from '../../context/flicker/flickerContext';
import GroupItem from './GroupItem';
import PieChart from './PieChart';
import AutoSuggest from 'react-autosuggest'
import fetchGroups from '../../ajaxCalls/fetchGroups'

const Groups = () => {

    // const [formData, setFormData] = useState({
    //     group: ''
    // });

    const [group, setGroup] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const flickerContext = useContext(FlickerContext);
    const { getGroups, groups } = flickerContext;

    // const onChange = e => {
    //     setFormData({
    //         [e.target.name]: e.target.value
    //     })
    // }

    const onSubmit = e => {
        e.preventDefault();
        console.log(group);
        // getGroups(formData);
        // setFormData({
        //     group: ''
        // })
    }

    // const { group } = formData;

    return (
        <Fragment>
            <PieChart />
            <div className="container">
                <p className="flow-text">Search Groups</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="input-field">
                <AutoSuggest inputProps={{
                    placeholder: 'Search Group',
                    autoComplete: 'abcd',
                    name: 'group',
                    id: 'group',
                    value: group    ,
                    onChange: (e, {newValue}) => {
                        setGroup(newValue)
                    }
                }} 
                suggestions={suggestions}
                onSuggestionsFetchRequested={async (value) => {
                    if(!value){
                        setSuggestions([]);
                    }
                    try {
                        const res = await fetchGroups(value)
                        console.log(res);
                        setSuggestions(res.groups.group.map(res => res.name))
                    } catch (err) {
                        console.error(err);
                    }

                }}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={(suggestion) => suggestion.name}
                renderSuggestion={suggesstion => <p className='flow-text'>
                    {suggesstion}
                </p>}
                />
                </div>
            {/* <div className="input-field">
                <input type="text" name='group' onChange={onChange} value={group}/>
                <label htmlFor="group">Search Group</label>
            </div> */}
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
