import {
    NumberDataState,
    SET_NUMBER_DATA,
    SetNumberDataAction,
} from './types';

//state
export const numberDataState: NumberDataState = {
    numberData: "",
}; 

//action
export const setNumberData = (text: string) : SetNumberDataAction => {
    return {
        type: SET_NUMBER_DATA,
        numberData: text,
    };
};

//reducer
export const numberDataReducer = (state = numberDataState, action: any) : NumberDataState => {
    switch (action.type) {
        case SET_NUMBER_DATA:
            return {...state, numberData: action.numberData}
        default:
            return state;
    }
};