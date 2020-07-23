import React, { useReducer } from 'react';
import FlickerReducer from './flickerReducer';
import FlickerContext from './flickerContext';
import { GET_GROUPS, GET_PHOTOS, GET_SINGLE_GROUP, GET_PHOTOS_FURTHER } from '../types';
import fetchGroups from '../../ajaxCalls/fetchGroups';
import fetchSingleGroup from '../../ajaxCalls/fetchSingleGroup';
import fetchPhotosByGroup from '../../ajaxCalls/fetchPhotosByGroup';
import fetchAllGroups from '../../ajaxCalls/fetchAllGroups';

const FlickerState = (props) => {

    const initialState = {
        allGroupNames: null,
        groups: [],
        group: null,
        groupsInfo: [],
        photosInfo: [],
        photos: [],
        loading: true
    }

    const [state, dispatch] = useReducer(FlickerReducer, initialState);

    const getAllGroups = async () => {
        const res = await fetchAllGroups();
        console.log(res);
    }

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
        // getPhotosByGroup(id);
    }

    const getPhotosByGroup = async (groupId) => {
        const res = await fetchPhotosByGroup(groupId);
        dispatch({
            type: GET_PHOTOS,
            payload: res
        })
    }
    
    const fetchPhotosFurther = async (groupId) => {
        const res = await fetchPhotosByGroup(groupId);
        dispatch({
            type: GET_PHOTOS_FURTHER,
            payload: res
        })

    }


    return (
        <FlickerContext.Provider
        value={{
            loading: state.loading,
            groups: state.groups,
            group: state.group,
            groupsInfo: state.groupsInfo,
            photos: state.photos,
            allGroupNames: state.allGroupNames,
            getGroups,
            getSingleGroup,
            getPhotosByGroup,
            fetchPhotosFurther,
            getAllGroups,
        }}>
            { props.children }
        </FlickerContext.Provider>
    )
}

export default FlickerState
