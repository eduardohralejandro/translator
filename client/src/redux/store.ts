import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import notes from './reducers/notes';
import auth from './reducers/auth';
import message from './reducers/auth';


const reducer = combineReducers({
    notes,
    auth,
    message,
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);


export default store;
