import authReducer from './authReducer'
import studentReducer from './studentReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from "react-redux-firebase";

const rootReducer= combineReducers({
    auth: authReducer,
    student: studentReducer,
    year:studentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer