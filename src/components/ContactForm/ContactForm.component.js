/**
 * Created by hien.phanthe on 3/15/17.
 */
import React, { Component } from 'react';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            firstname:'',
            lastname :'',
            age:0
        };

        this._onFirstNameChange = this._onFirstNameChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
        this._onLastNameChange = this._onLastNameChange.bind(this);
        this._onAgeChange = this._onAgeChange.bind(this);

    }

    _onFormSubmit(event) {
        event.preventDefault();

        const newContact = {...this.state};
        this.props.onContactAdded(newContact);
    }

    _onFirstNameChange(event) {
        const firstName = event.target.value;
        this.setState({firstname:firstName});
    }

    _onLastNameChange(event) {
        const lastName = event.target.value;
        this.setState({lastname:lastName});
    }

    _onAgeChange(event) {
        const age = event.target.value;
        this.setState({age:age});
    }


    render() {
        return(
            <form onSubmit={this._onFormSubmit}>
                <table align="center" width="400px">
                    <tr><td width="150px">First Name:</td> <td>
                        <input type="text" value={this.state.firstname} onChange={this._onFirstNameChange}  />
                    </td></tr>

                    <tr><td>Last Name:</td> <td>
                        <input type="text" value={this.state.lastname} onChange={this._onLastNameChange}  />

                    </td></tr>

                    <tr> <td>Age:</td><td>
                        <input type="text" value={this.state.age} onChange={this._onAgeChange}  />

                    </td></tr>
                    <tr>
                        <td></td>
                        <td><input type="submit"></input></td>
                    </tr>
                </table>

            </form>
        )
    }
}

export default ContactForm;
