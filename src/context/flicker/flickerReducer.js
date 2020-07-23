import { GET_GROUPS, GET_SINGLE_GROUP, GET_PHOTOS, FETCH_ERROR } from '../types';

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
            photos: [...state.photos, ...payload.photos.photo],
            photosInfo: payload.photos,
            loading: false
        }
        case FETCH_ERROR: 
        return {
            groups: [],
            group: null,
            groupsInfo: [],
            photos: [],
            loading: false
        }

        default: return state;
    }
}