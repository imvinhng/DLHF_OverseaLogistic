import { SET_USER_NAME, SET_USER_AGE, INCREASE_AGE, GET_CITIES, SET_LOGIN } from './actions';

const initialState = {
    phone_number: '',
    password: '',
    name: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                phone_number: action.payload.phone_number,
                password: action.payload.password,
                name: action.payload.name
            };

        default:
            return state;
    }
}

export default userReducer;