/**
 * Created by hien.phanthe on 3/15/17.
 */

import * as constants from '../actions/constants'

const initialState = {
    data : []
};

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.CONTACT_LOAD_SUCCEEDED: return {
            ...state,
            data: action.payload || []
        };

        case constants.CONTACT_ADDED_SUCCEEDED: return {
            ...state,
            data: [...state.data, action.payload]
        };

        default:
            return {
                ...state
            }

    }

    return state
};

export default contactsReducer;

