import {
    MyContactsState,
    SET_MY_CONTACTS,
    SetMyContactsAction,
} from './types';

//state
export const myContactsState: MyContactsState = {
    myContacts: [],
}; 

//action
export const setMyContacts = (text: []) : SetMyContactsAction => {
    return {
        type: SET_MY_CONTACTS,
        myContacts: text,
    };
};

//reducer
export const myContactsReducer = (state = myContactsState, action: any) : MyContactsState => {
    switch (action.type) {
        case SET_MY_CONTACTS:
            return {...state, myContacts: action.myContacts}
        default:
            return state;
    }
};