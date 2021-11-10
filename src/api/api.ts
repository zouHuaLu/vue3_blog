import {Request} from './request'

export function getArticles (){
    return Request.axiosInstance({
        url: 'blog/api/column/articlesList',
        method:'GET'
    })
}

export function getShuoShuo () {
    return Request.axiosInstance({
        url: 'blog/api/column/latestShuoShuo',
        method:'GET'
    })
}

export function getAllArticles() {
    return Request.axiosInstance({
        url: 'blog/api/column/allArticles',
        method:'GET'
    })
}

export function getAllShuoShuo() {
    return Request.axiosInstance({
        url: 'blog/api/column/allShuoShuo',
        method:'GET'
    })
}