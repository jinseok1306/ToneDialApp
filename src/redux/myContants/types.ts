//state type
export interface MyContactsState {
    myContacts: [] | null;
}

//action key type
export const SET_MY_CONTACTS = 'SET_MY_CONTACTS';

//action type
export interface SetMyContactsAction {
    type: typeof SET_MY_CONTACTS;
    myContacts: [] | null;
}