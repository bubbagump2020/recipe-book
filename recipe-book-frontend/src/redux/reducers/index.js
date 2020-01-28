import * as actions from '../action-types/auth'

const signupState = {
    username: '',
    email: '',
    password: ''
}

const user = {
    
}

const recipe = {
  name: '',
  desc: ''
}

const ingredient = {
    name: '',
    measurement: ''
}

export const recipeBook = ( state = {}, action ) => {
    return {
        signup: signup(state.signup, action),
        loggedInUser: loggedInUser(state.user, action),
        newRecipe: newRecipe(state.recipe, action)
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

const newRecipe = (state = recipe, action) => {
    if(action.type === actions.RECIPE_NAME){
        return{
            ...state,
            name: action.payload
        }
    }
    if(action.type === actions.RECIPE_DESC){
        return{
            ...state.recipe,
            desc: action.payload
        }
    }
    return state
}