import { createUser, login } from '../api/LoginAPI'

export const GET_LOGIN = 'GET_LOGIN'
export const LOGOUT = 'LOGOUT'

export const fetchCreateUser = (user) => (dispatch) => {
    const newUser = {
        ...user,
        creation: new Date()
    }
    return createUser(newUser).then((result) => {

        if (result.error) {
            return Promise.reject(result.error)
        } else {
            dispatch(getLogin(result))
            return Promise.resolve()
        }
    })
}

export const fetchLogin = (user) => (dispatch) => {

    return login(user).then((result) => {
        
        if (result.error) {
             return Promise.reject(result.error)
        } else {
            dispatch(getLogin(result))
            return Promise.resolve()
        }

    })

}

export const logout = () => ({
    type: LOGOUT
})

const getLogin = (token) => ({
    type: GET_LOGIN,
    token
})
