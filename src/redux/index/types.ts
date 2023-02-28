//state type
export interface IndexState {
    index: Number | null;
}

//action key type
export const SET_INDEX = 'SET_INDEX';

//action type
export interface SetIndexAction {
    type: typeof SET_INDEX;
    index: Number | null;
}