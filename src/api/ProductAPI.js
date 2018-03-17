import { api, headers } from './UtilsAPI.js'

export const getAllProducts = () =>
    fetch(`${api}Product`, {
        method: 'GET',
        headers
    }).then((res) => res.json())
    .then((data) => data)