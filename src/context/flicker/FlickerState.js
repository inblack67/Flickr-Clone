import React, { useReducer } from 'react';
import FlickerReducer from './flickerReducer';
import FlickerContext from './flickerContext';

const FlickerState = (props) => {

    const initialState = {
        loading: true
    }

    const [state, dispatch] = useReducer(FlickerReducer, initialState);

    return (
        <FlickerContext.Provider
        value={{
            loading: state.loading
        }}>
            { props.children }
        </FlickerContext.Provider>
    )
}

export default FlickerState
