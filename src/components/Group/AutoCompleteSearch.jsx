import React, { useState, Fragment, useContext } from 'react';
import FlickerContext from '../../context/flicker/flickerContext';
import AutoSuggest from 'react-autosuggest'
import fetchGroups from '../../ajaxCalls/fetchGroups'
import { debounce } from 'throttle-debounce'

const Groups = () => {

    const [group, setGroup] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const flickerContext = useContext(FlickerContext);
    const { getGroups } = flickerContext;

    const onSubmit = e => {
        e.preventDefault();
        getGroups(group);
        setGroup('');
    }

    return (
        <Fragment>
            <div className="container">
                <p className="flow-text">Search Groups</p>
            <form onSubmit={onSubmit}>
            <div className="input-field">
                <AutoSuggest inputProps={{
                    placeholder: 'Search Group',
                    autoComplete: 'abcd',
                    name: 'group',
                    id: 'group',
                    value: group,
                    onChange: (e, { newValue }) => {
                        setGroup(newValue)
                    }
                }}
                suggestions={suggestions}
                onSuggestionsFetchRequested={async ({ value }) => {
                    if(!value){
                        setSuggestions([]);
                        return;
                    }
                    try {
                        const deb = debounce(1000, async () => {
                            const res = await fetchGroups(value);
                            const groups = res.groups.group
                            setSuggestions(groups.map(group => ({
                                name: group.name
                            })))
                        })
                        deb();
                    } catch (err) {
                        console.error(err);
                        setSuggestions([])
                    }
                }}
                onSuggestionsClearRequested={() => {
                    setSuggestions([]);
                }}
                getSuggestionValue={(suggestion) => suggestion.name}
                renderSuggestion={suggestion => <div>
                    { suggestion.name }
                </div>}
                onSuggestionSelected={(e, {suggestion, method}) => {
                    if(method === 'enter'){
                        e.preventDefault();
                    }
                    setGroup(suggestion.name);
                }}
                 />
            </div>
            <div className="input-field">
                <button type="submit" className="btn red">Search</button>
            </div>
            </form>
            </div>
        </Fragment>
    )
}

export default Groups
