import axios from "axios";
import { accountService } from "./account_service";
const Axios= axios.create({
    // baseURL:'https://127.0.0.1:8989'
})

/**
 * Interpretteur pour le token
  **/
Axios.interceptors.request.use(request=>{
    if(accountService.isLogged()){
        request.headers.Authorization='Bearer '+accountService.getToken()
    }


    return request
})


export default Axios