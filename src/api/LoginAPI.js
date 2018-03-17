import { api, headers } from './UtilsAPI.js'

export const createUser = (user) =>
    fetch(`${api}Customer`, {
        method: 'POST',
        headers,
        body: JSON.stringify(user)
    }).then((res) => res.json())
    .then((data) => data)

export const login = (user) =>
    fetch(`${api}Customer/auth?email=${user.email}&password=${user.password}`, {
        method: 'POST',
        headers
    }).then((res) => res.json())
    .then((data) => data)

