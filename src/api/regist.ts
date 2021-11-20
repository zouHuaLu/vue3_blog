import { Request } from "./request";

export function login(username:string,password:string):any{
    return Request.axiosInstance({
        url:'blog/api/user/login',
        method:'POST',
        data:{
            username,password
        }
    })
}