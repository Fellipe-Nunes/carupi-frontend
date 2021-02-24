import {http} from '../config/http'

// Cars verbs
const getCars = (data) => http.get('/cars')
const deleteCars = (id) => http.delete(`/cars/${id}`)
const postCars = (data, config = {}) => http.post('/cars', data, config)
const patchCars = (id, data, config = {}) =>{ http.patch(`/cars/${id}`, data, config)
console.log(id,data)}

// User verbs
const getUsers = (data) => http.get('/user')
const deleteUser = (id) => http.delete(`/user/${id}`)
const postUser = (data) => http.post('/user', data)
const patchUser = (id, data) => http.patch(`/user/${id}`, data)

// User verbs
const getBranchList = (data) => http.get('/company')
const deleteBranches = (id) => http.delete(`/company/${id}`)
const postBranches = (data) => http.post('/company', data)
const patchBranches = (id, data) => http.patch(`/company/${id}`, data)

export {
    getBranchList,
    deleteBranches,
    postBranches,
    patchBranches,
    getUsers,
    deleteUser,
    postUser,
    patchUser,
    getCars,
    deleteCars,
    postCars,
    patchCars
}