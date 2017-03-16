import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'

import rootReducer  from './reducers'
import * as contacts from './actions/contacts'
import devToolsEnhancer from 'remote-redux-devtools';

import thunk from 'redux-thunk'

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk), devToolsEnhancer());
store.dispatch(contacts.loadContacts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
