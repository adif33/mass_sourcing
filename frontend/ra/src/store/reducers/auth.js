import * as actionTypes from '../actions/actionType';
import {updateObject} from '../utility';

/*takes the state and returns what you need*/

const initialState = {
    token: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true /*starts spinner*/
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token, /*authSuccess function in actions returns the token*/
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state; /*do not manipulate state*/
    }
}

export default reducer;