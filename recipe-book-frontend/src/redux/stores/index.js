import { createStore } from 'redux'
import { recipeBook } from '../reducers/index'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const pReducer = persistReducer(persistConfig, recipeBook)

export const store = createStore(
    pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)
