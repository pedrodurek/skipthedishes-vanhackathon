import { GET_LOGIN, LOGOUT } from '../actions/login'

const initialState = {
    token: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                token: action.token
            }
        case LOGOUT:
            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
}

export default login
