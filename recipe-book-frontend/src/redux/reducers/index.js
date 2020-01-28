import * as actions from '../action-types/auth'

const signupState = {
    username: '',
    email: '',
    password: ''
}

const user = {
    
}

const recipes = []

export const recipeBook = ( state = {}, action ) => {
    return {
        signup: signup(state.signup, action),
        loggedInUser: loggedInUser(state.user, action),
        allRecipes: allRecipes(state.recipes, action)
    }
}

const signup = (state = signupState, action) => {
    if(action.type === actions.USERNAME){
        return {
            ...state,
            username: action.payload            
        }
    }
    if(action.type === actions.EMAIL){
        return {
            ...state,
            email: action.payload
        }
    }
    if(action.type === actions.PASSWORD){
        return {
            ...state,
           password: action.payload   
        }
    }
    return state
}

const loggedInUser = (state = user, action) => {
    if(action.type === actions.USER){
        return{
            ...state,
            user: action.payload
        }
    }
    return state
}

const allRecipes = (state = recipes, action) => {
    if(action.type === actions.RECIPES){
        return {
            ...state,
            recipes: {
                ...state.recipes,
                recipes: action.payload
            }

        }
    }
    return state
}