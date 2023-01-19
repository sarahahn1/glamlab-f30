import {createStore} from 'redux'

let initialState = {
    admin: false, 
    username: "",
    userId: null,

}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            let newState = {
                admin: action.payload.admin,
                username:action.payload.username,
                userId: action.payload.id
            }
            return newState
        default: 
        return state
    }
}

const store = createStore(reducer)

export default store