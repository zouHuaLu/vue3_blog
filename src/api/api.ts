import {Request} from './request'

export function getArticles (){
    return Request.axiosInstance({
        url: 'http://127.0.0.1:8082/blog/api/column/list',
        method:'GET'
    })
}