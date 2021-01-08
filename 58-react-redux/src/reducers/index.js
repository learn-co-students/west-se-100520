import { villainsReducer } from './villains'
import { moriartyReducer } from './moriarty'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    villains: villainsReducer,
    moriartyLocations: moriartyReducer
})

// shape of state:
// {
//     villains: [{villian}],
//     moriartyLocation: [{morLocs}]
// }

export default rootReducer