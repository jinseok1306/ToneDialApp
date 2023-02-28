//state type
export interface NumberDataState {
    numberData: string | null;
}

//action key type
export const SET_NUMBER_DATA = 'SET_NUMBER_DATA';

//action type
export interface SetNumberDataAction {
    type: typeof SET_NUMBER_DATA;
    numberData: string | null;
}