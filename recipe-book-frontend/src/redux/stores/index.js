import { createStore } from 'redux'
import { recipeBook } from '../reducers/index'

export const store = createStore(
    recipeBook, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

