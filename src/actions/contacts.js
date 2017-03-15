/**
 * Created by hien.phanthe on 3/15/17.
 */


import * as constants from './constants'

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
    return {
        type: constants.CONTACT_LOAD_SUCCEEDED,
        payload: defaultContacts
    }
};

export const newContactSuccess = (newContact) => {
    return {
        type: constants.CONTACT_ADDED_SUCCEEDED,
        payload:newContact
    }
};
