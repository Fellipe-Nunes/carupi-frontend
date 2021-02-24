import {http} from '../config/http'

const auth = (data) => http.post('/auth', data)

export {auth}