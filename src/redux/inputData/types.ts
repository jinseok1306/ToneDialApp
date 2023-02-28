//state type
export interface InputDataState {
    inputData: string | null;
}

//action key type
export const SET_INPUT_DATA = 'SET_INPUT_DATA';

//action type
export interface SetInputDataAction {
    type: typeof SET_INPUT_DATA;
    inputData: string | null;
}