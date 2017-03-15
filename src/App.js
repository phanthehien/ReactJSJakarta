import React, {Component} from 'react';
import './App.css';

import ContactsContainer from './containers/ContactsContainer'

class App extends Component {

    render() {
        return (
           <ContactsContainer />
        );
    }
}

App.defaultProps = {
    title: "[not value set]",
};

export default App;
