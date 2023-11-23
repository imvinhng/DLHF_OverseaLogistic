import { SET_LOGIN } from './actions';

const initialState = {
    username: '',
    password: '',
    name: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                username: action.payload.username,
                password: action.payload.password,
                name: action.payload.name
            };

        default:
            return state;
    }
}

export default userReducer;