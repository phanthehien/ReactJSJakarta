/**
 * Created by hien.phanthe on 3/15/17.
 */
import * as constants from './constants'
import axios from 'axios'

const defaultContacts = [{
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
}];

export const loadContacts = (contacts = defaultContacts ) => {

    return (dispatch) => {
        fetch('http://localhost:3001/contacts')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: constants.CONTACT_LOAD_SUCCEEDED,
                    payload: json
                });
            })
            .catch(err => {
                dispatch({
                    type: constants.CONTACT_LOAD_FAILED,
                    payload: err
                })
            })

    };
    // return {
    //     type: constants.CONTACT_LOAD_SUCCEEDED,
    //     payload: defaultContacts
    // }
};

export const saveNewContact = (newContact) => {
    return (dispatch) => {

        axios.post('http://localhost:3001/contacts', newContact)
            .then(response => {
                dispatch({
                    type: constants.CONTACT_ADDED_SUCCEEDED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: constants.CONTACT_ADDED_FAILED,
                    payload: err.message
                })
            });
    };

    // return {
    //     type: constants.CONTACT_ADDED_SUCCEEDED,
    //     payload:newContact
    // }
};
