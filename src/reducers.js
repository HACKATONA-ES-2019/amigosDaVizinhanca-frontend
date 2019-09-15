import { combineReducers } from 'redux'
import DisasterReducer from './disasters/DisasterReducer'
import PlansReducer from './plans/PlansReducer'

const rootReducer = combineReducers({
    disaster : DisasterReducer,
    plans: PlansReducer
})

export default rootReducer