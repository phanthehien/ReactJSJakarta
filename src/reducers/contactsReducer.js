/**
 * Created by hien.phanthe on 3/15/17.
 */

import * as constants from '../actions/constants'

const initialState = {
    data : []
    // data: [{
    //     id: 1,
    //     firstname: 'John',
    //     lastname: 'Doe',
    //     age: 30
    // }, {
    //     id: 2,
    //     firstname: 'Hien',
    //     lastname: 'Phan',
    //     age: 32
    // }, {
    //     id: 3,
    //     firstname: 'Xuan',
    //     lastname: 'Vinh',
    //     age: 28
    // }]
};

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.CONTACT_LOAD_SUCCEEDED: return {
            ...state,
            data: action.payload || []
        };

        default:
            return {
                ...state
            }

    }

    return state
};

export default contactsReducer;

