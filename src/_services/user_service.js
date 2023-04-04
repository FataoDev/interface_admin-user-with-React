import Axios from '@/_services/caller_service'
// import axios from 'axios'

let getAllUsers=()=>{
    return Axios.get('http://127.0.0.1:8989/users')
}

let getUser =(uid)=>{
    return Axios.get('http://127.0.0.1:8989/users/'+uid)
}

export const userService ={
    getAllUsers,
    getUser
}