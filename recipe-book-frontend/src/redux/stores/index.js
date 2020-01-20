import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { recipeBook } from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
}

const pReducer = persistReducer(persistConfig, recipeBook)

export const store = createStore(
    pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const persistor = persistStore(store)