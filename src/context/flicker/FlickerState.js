import React, { useReducer } from 'react';
import FlickerReducer from './flickerReducer';
import FlickerContext from './flickerContext';
import { GET_GROUPS, GET_PHOTOS, GET_SINGLE_GROUP, GET_PHOTOS_FURTHER, FETCH_GROUPS_ERROR, FETCH_PHOTOS_ERROR, FETCH_SINGLE_GROUP_ERROR } from '../types';
import fetchGroups from '../../ajaxCalls/fetchGroups';
import fetchSingleGroup from '../../ajaxCalls/fetchSingleGroup';
import fetchPhotosByGroup from '../../ajaxCalls/fetchPhotosByGroup';

const FlickerState = (props) => {

    const initialState = {
        groups: [],
        group: null,
        photos: [],
        loading: true
    }

    const [state, dispatch] = useReducer(FlickerReducer, initialState);

    const getGroups = async ( { group } ) => {
        try {
            const res = await fetchGroups(group);
            dispatch({
                type: GET_GROUPS,
                payload: res
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: FETCH_GROUPS_ERROR
            })
        }
    }

    const getSingleGroup = async (id) => {
        try {
            const res = await fetchSingleGroup(id);
            dispatch({
                type: GET_SINGLE_GROUP,
                payload: res
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: FETCH_SINGLE_GROUP_ERROR
            })
        }
    }

    const getPhotosByGroup = async (groupId) => {
        try {
            const res = await fetchPhotosByGroup(groupId);
            dispatch({
                type: GET_PHOTOS,
                payload: res
            })
        } catch (err) {
            console.error(err);
            dispatch({
                type: FETCH_PHOTOS_ERROR
            })
        }
    }
    
    const fetchPhotosFurther = async (groupId) => {
        try {
            const res = await fetchPhotosByGroup(groupId);
            dispatch({
                type: GET_PHOTOS_FURTHER,
                payload: res
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: FETCH_PHOTOS_ERROR
            })
        }
    }


    return (
        <FlickerContext.Provider
        value={{
            loading: state.loading,
            groups: state.groups,
            group: state.group,
            photos: state.photos,
            getGroups,
            getSingleGroup,
            getPhotosByGroup,
            fetchPhotosFurther,
        }}>
            { props.children }
        </FlickerContext.Provider>
    )
}

export default FlickerState
