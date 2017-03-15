import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import { Provider} from 'react-redux'

import rootReducer  from './reducers'
import loadContacts  from './actions/contacts'

const initialState = {};

const store = createStore(rootReducer, initialState);
store.dispatch(loadContacts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
