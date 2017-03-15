import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader.js'
import Button from './components/Button.js'
import Counter from './components/Counter.js'
import ContactList from './components/ContactList/ContactList.component'
import ContactForm from './components/ContactForm/ContactForm.component'

class App extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0,
            contacts: [{
                id: 1,
                firstname: 'John',
                lastname: 'Doe',
                age: 30
            }, {
                id: 2,
                firstname: 'Hien',
                lastname: 'Phan',
                age: 32
            }, {
                id: 3,
                firstname: 'Xuan',
                lastname: 'Vinh',
                age: 28
            }]
        };

        this.onContactAdded = this.onContactAdded.bind(this);
    }

    onContactAdded(newContact) {

        this.setState({contacts: [...this.state.contacts, newContact]});

    }

    onButtonClick = () => {
        this.setState({counter: this.state.counter + 1});
    };


    render() {
        const {counter, contacts} = this.state;
        return (
            <div className="App">
                <AppHeader logo={logo}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <span> Button has been clicked {counter} time. </span>
                <Counter counterValue={counter}/>
                <p>
                    <Button onClick={this.onButtonClick} numberOfClick={counter}/>
                </p>
                <p>
                    <ContactList contacts={contacts}/>
                </p>
                <p>
                    <ContactForm contacts={contacts} onContactAdded={this.onContactAdded}/>
                </p>
            </div>
        );
    }
}

App.defaultProps = {
    title: "[not value set]",
};


export default App;
