import { combineReducers } from 'redux'
import { authentication } from '../../components/Home/authReducer'
import { recipe } from '../../components/Recipe/reciReducer'

const rootReducer = combineReducers({
    authentication,
    recipe
})

export default rootReducer