export const SET_LOGIN = 'SET_LOGIN'; // LOGIN
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
export const SET_NAME = 'SET_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';


export const loginAction = ({ phone_number, name, password }) => dispatch => {
    dispatch({
        type: SET_LOGIN,
        payload: { phone_number: phone_number, name: name, password: password },
    });
};

