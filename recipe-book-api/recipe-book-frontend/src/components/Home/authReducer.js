import { authActions } from '../../redux/constants/index'

const initialState = {
    user: {
        loggedIn: false,
        username: null,
        password: null,
        confirm_password: null,
    },
    loggedInUser: {

    }
}

export function authentication(state = initialState, action){
    switch(action.type){
        case authActions.USERNAME:
            return{
                ...state,
                user: {
                    ...state.user,
                    username: action.payload
                }
            }
        case authActions.PASSWORD:
            return{
                ...state,
                user: {
                    ...state.user,
                    password: action.payload
                }
            }
        case authActions.CONFIRM_PASSWORD:
            return{
                ...state,
                user: {
                    ...state.user,
                    confirm_password: action.payload
                }
            }
        case authActions.AUTHENTICATED_USER:
            return{
                ...state,
                loggedInUser: action.payload
            }
        case authActions.CREATE_USER:
            return{
                ...state,
                user: {
                    ...state.user,
                    loggedIn: true
                }
            }
        default:
            return state
    }
}