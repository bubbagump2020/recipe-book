import { combineReducers } from 'redux'
import { authentication } from '../../components/Home/authReducer'

const rootReducer = combineReducers({
    authentication
})

export default rootReducer