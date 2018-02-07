import { combineReducers } from 'redux'

let initialState = [
    { sender: 'Admin', message: 'Hello' }
]

const chat = (state = initialState, action) => {
    // TODO define action type
    return state
}

const chatReducer = combineReducers({ chat })

export default chatReducer