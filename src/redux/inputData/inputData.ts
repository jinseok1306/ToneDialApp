import {
    InputDataState,
    SET_INPUT_DATA,
    SetInputDataAction,
} from './types';

//state
export const inputDataState: InputDataState = {
    inputData: "",
}; 

//action
export const setInputData = (text: string) : SetInputDataAction => {
    return {
        type: SET_INPUT_DATA,
        inputData: text,
    };
};

//reducer
export const inputDataReducer = (state = inputDataState, action: any) : InputDataState => {
    switch (action.type) {
        case SET_INPUT_DATA:
            return {...state, inputData: action.inputData}
        default:
            return state;
    }
};