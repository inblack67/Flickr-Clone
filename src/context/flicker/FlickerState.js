import React, { useReducer } from 'react';
import FlickerReducer from './flickerReducer';
import FlickerContext from './flickerContext';
import { GET_GROUPS, GET_PHOTOS, GET_SINGLE_GROUP } from '../types';
import fetchGroups from '../../ajaxCalls/fetchGroups';
import fetchSingleGroup from '../../ajaxCalls/fetchSingleGroup';
import fetchPhotosByGroup from '../../ajaxCalls/fetchPhotosByGroup';

const FlickerState = (props) => {

    const initialState = {
        groups: [],
        group: null,
        groupsInfo: [],
        photosInfo: [],
        photos: [],
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

    const getSingleGroup = async (id) => {
        const res = await fetchSingleGroup(id);
        dispatch({
            type: GET_SINGLE_GROUP,
            payload: res
        })
    }

    const getPhotosByGroup = async (groupId) => {
        const res = await fetchPhotosByGroup(groupId);
        dispatch({
            type: GET_PHOTOS,
            payload: res
        })
    }

    const fetchPhotosFurther = (groupId) => {
        getPhotosByGroup(groupId);
    }

    return (
        <FlickerContext.Provider
        value={{
            loading: state.loading,
            groups: state.groups,
            group: state.group,
            groupsInfo: state.groupsInfo,
            photos: state.photos,
            getGroups,
            getSingleGroup,
            getPhotosByGroup,
            fetchPhotosFurther
        }}>
            { props.children }
        </FlickerContext.Provider>
    )
}

export default FlickerState
