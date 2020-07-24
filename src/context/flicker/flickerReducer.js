import { GET_GROUPS, GET_SINGLE_GROUP, GET_PHOTOS, GET_PHOTOS_FURTHER, FETCH_GROUPS_ERROR, FETCH_PHOTOS_ERROR, FETCH_SINGLE_GROUP_ERROR } from '../types';

export default (state, action) => {
    const { payload, type } = action;
    switch(type){

        case GET_GROUPS: 
        return {
            ...state,
            groups: payload.groups.group,
            groupsInfo: payload.groups,
            loading: false
        }
        case GET_SINGLE_GROUP: 
        return {
            ...state,
            group: payload,
            loading: false
        }
        case GET_PHOTOS: 
        return {
            ...state,
            photos: payload.photos.photo,
            photosInfo: payload.photos,
            loading: false
        }
        case GET_PHOTOS_FURTHER: 
        return {
            ...state,
            photos: [...state.photos, ...payload.photos.photo],
            loading: false
        }
        case FETCH_GROUPS_ERROR: 
        return {
            groups: [],
            loading: false
        }
        case FETCH_SINGLE_GROUP_ERROR: 
        return {
            group: null,
            loading: false
        }
        case FETCH_PHOTOS_ERROR: 
        return {
            photos: [],
            loading: false
        }

        default: return state;
    }
}