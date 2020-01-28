import {
    USERNAME,
    EMAIL,
    PASSWORD,
    USER,
    RECIPE_NAME,
    RECIPE_DESC,
    INGREDIENT_NAME,
    MEASUREMENT
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

export const user = (payload) => {
    return { type: USER, payload}
}

export const recipeName = (payload) => {
    return { type: RECIPE_NAME, payload}
}

export const recipeDesc = (payload) => {
    return { type: RECIPE_DESC, payload }
}

export const ingredName = (payload) => {
    return { type: INGREDIENT_NAME, payload }
}

export const measurement = (payload) => {
    return { type: MEASUREMENT, payload }
}