import * as actions from '../constants/index'

export function username(payload){
    return { type: actions.authActions.USERNAME, payload }
}

export function password(payload){
    return { type: actions.authActions.PASSWORD, payload }
}

export function confirmPassword(payload){
    return { type: actions.authActions.CONFIRM_PASSWORD, payload }
}

export function authenticatedUser(payload){
    return { type: actions.authActions.AUTHENTICATED_USER, payload }
}