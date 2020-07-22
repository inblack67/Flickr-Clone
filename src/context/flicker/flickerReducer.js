import { GET_GROUPS } from '../types';

export default (state, action) => {
    const { payload, type } = action;
    switch(type){
        case GET_GROUPS: 
        return {
            ...state,
            groups: payload
        }
        default: return state;
    }
}