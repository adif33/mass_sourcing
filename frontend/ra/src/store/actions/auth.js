import axios from 'axios';
import * as actionTypes from './actionType';

/*defines what happens each state*/

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}


export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => { /*settimout = will be executed after a certain amount of time*/
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => { /*a dispatch is a method which returns a dispatch - it notifies that something happened*/
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login', {
            username: username,
            password: password
        }).then(res => {
            const token = res.data.key; /*from rest framework, which assigns a key*/
            const expirationDate = new Date(new Date().getTime() + 3600*1000); /* can be logged for 1 hour*/
            localStorage.setItem('token', token); /*storing the data in the local storage of the browser*/
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password1, password2) => { /*not default and can be changes in back*/
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        }).then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000); /* can be logged for 1 hour*/
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token === undefined) {
            dispatch(logout());
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()) { /*exp date already happened*/
                dispatch(logout());
            }
            else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())) / 1000);
            }
        }
    }
}


