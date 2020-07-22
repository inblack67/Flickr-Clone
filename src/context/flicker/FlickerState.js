import React, { useReducer } from 'react';
import FlickerReducer from './flickerReducer';
import FlickerContext from './flickerContext';
import fetchGroups from '../../ajaxCalls/fetchGroups';
import { GET_GROUPS } from '../types';

const FlickerState = (props) => {

    const initialState = {
        groups: [],
        gallery: [],
        loading: true
    }

    const [state, dispatch] = useReducer(FlickerReducer, initialState);

    const getGroups = async ( { group } ) => {
        const res = await fetchGroups(group);
        dispatch({
            type: GET_GROUPS,
            payload: res
        })
    }

    return (
        <FlickerContext.Provider
        value={{
            loading: state.loading,
            groups: state.groups,
            gallery: state.gallery,
            getGroups
        }}>
            { props.children }
        </FlickerContext.Provider>
    )
}

export default FlickerState
