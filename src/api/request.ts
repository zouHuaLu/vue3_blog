import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from 'element-plus'

export class Request {
    public static axiosInstance: AxiosInstance

    public static init() {
        let baseURL:string=''
        const timeout=6000
        if(process.env.NODE_ENV == 'production'){
            // 线上
            baseURL= 'http://139.224.190.142:8082'
        }else if(process.env.NODE_ENV == 'development'){
            // 本地
            baseURL = 'http://127.0.0.1:8082/'
        }
        this.axiosInstance = axios.create({
           baseURL,
           timeout
        })
        this.initInterceptors()
    }

    // 配置axios拦截器
    public static initInterceptors() {
        this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        this.axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

        this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            const token = localStorage.getItem('ACCESS_TOKEN')
            if (token) {
                config.headers!.Authorization = 'Bearer' + token
            }
            return config
        }), (err: any) => {
            console.log(err)
        }

        this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
            if (response.status === 200) {
                return response
            } else {
                Request.errorHandle(response)
                return response
            }
        }, (err: any) => {
            const { response } = err
            if (response) {
                Request.errorHandle(response)
                return Promise.reject(response.data)
            } else {
                ElMessage.error('网络连接错误，请稍后再试')
            }
        })
    }

    private static errorHandle(res: any) {
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                ElMessage.warning('请求的资源不存在')
                break;
            default:
                ElMessage.warning('连接错误')
                break;
        }
    }
}