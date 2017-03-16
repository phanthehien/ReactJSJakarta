/**
 * Created by hien.phanthe on 3/15/17.
 */
import React, {Component} from 'react';
import logo from '../logo.svg';

import AppHeader from '../components/AppHeader'
import Button from '../components/Button.js'
import Counter from '../components/Counter.js'
import ContactList from '../components/ContactList/ContactList.component'
import ContactForm from '../components/ContactForm/ContactForm.component'

import * as contactActions from '../actions/contacts'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ContactsContainer extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0,
        };
    }

    onContactAdded = (newContact) => {
        // this.setState({contacts: [...this.state.contacts, newContact]});
        //store.dispatch(contactActions.saveNewContact(newContact));
        const { saveNewContact } = this.props.actions
        saveNewContact(newContact);
    }

    onButtonClick = () => {
        this.setState({counter: this.state.counter + 1});
    };


    render() {
        const { counter } = this.state;
        const { contacts } = this.props;

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


                <ContactForm onContactAdded={this.onContactAdded}/>
                <div>
                    {
                        contacts.error ? <div>{contacts.error.toString()}</div> : <ContactList contacts={contacts.data}/>
                    }
                </div>
            </div>
        );
    }
}

ContactsContainer.defaultProps = {
    title: "[not value set]",
};

const mapStateToProps = (store) => {
    return {
        contacts  : store.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(contactActions, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
