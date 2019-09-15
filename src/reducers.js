import { combineReducers } from 'redux'
import DisasterReducer from './disaster/DisasterReducer'

const rootReducer = combineReducers({
    disaster : DisasterReducer
})

export default rootReducer