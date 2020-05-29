import authReducer from './authReducer'
import studentReducer from './studentReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer= combineReducers({
    auth: authReducer,
    student: studentReducer,
    year:studentReducer,
    firestore: firestoreReducer
})

export default rootReducer