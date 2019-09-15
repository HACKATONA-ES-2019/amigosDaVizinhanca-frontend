import { combineReducers } from 'redux'
import DisasterReducer from './disasters/DisasterReducer'

const rootReducer = combineReducers({
    disaster : DisasterReducer
})

export default rootReducer