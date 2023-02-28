import { combineReducers, Reducer, Store, legacy_createStore as createStore} from 'redux';

//reducers
import { myContactsReducer } from './myContants/myContacts';
import { numberDataReducer } from './numberData/numberData';
import { inputDataReducer } from './inputData/inputData';
import { indexReducer } from './index/index';

const rootReducer: Reducer = combineReducers({
    myContacts : myContactsReducer,
    numberData : numberDataReducer,
    inputData : inputDataReducer,
    index : indexReducer,
});

const store: Store = createStore(rootReducer);

export default store;