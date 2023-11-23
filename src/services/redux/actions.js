export const SET_LOGIN = 'SET_LOGIN'; // LOGIN
export const SET_username = 'SET_username'
export const SET_NAME = 'SET_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';


export const loginAction = ({ username, name, password }) => dispatch => {
    dispatch({
        type: SET_LOGIN,
        payload: { username: username, name: name, password: password },
    });
};

