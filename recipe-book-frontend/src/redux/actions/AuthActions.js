import {
    USERNAME,
    EMAIL,
    PASSWORD
} from '../action-types/auth'

export const username = (payload) => {
    return { type: USERNAME, payload }
}

export const email = (payload) => {
    return { type: EMAIL, payload}
}

export const password = (payload) => {
    return { type: PASSWORD, payload }
}