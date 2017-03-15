/**
 * Created by hien.phanthe on 3/15/17.
 */

import React, { Component } from 'react'
import Contact from '../Contact/Contact.component'

class ContactList extends Component {
    constructor() {
        super();
    }

    render() {
        const {contacts} = this.props;

        return(<div>
            <ul>
                { contacts.map(contact => (<li key={contact.id}><Contact contact={contact}></Contact></li>)) }
            </ul>
        </div>)
    };
}

export default ContactList;