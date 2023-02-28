import {
    IndexState,
    SET_INDEX,
    SetIndexAction,
} from './types';

//state
export const indexState: IndexState = {
    index: 0,
}; 

//action
export const setIndex = (data: Number) : SetIndexAction => {
    return {
        type: SET_INDEX,
        index: data,
    };
};

//reducer
export const indexReducer = (state = indexState, action: any) : IndexState => {
    switch (action.type) {
        case SET_INDEX:
            return {...state, index: action.index}
        default:
            return state;
    }
};