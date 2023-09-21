import axios from 'axios'


const axiosConfig = axios.create({
    baseURL: 'http://localhost:4040',
    headers:{
        'Content-Type': 'application/json',        
    }
})

export const getAuthToken = () =>{
    return localStorage.getItem("auth_token")
}

export const setAuthToken = (token) =>{
    localStorage.setItem("auth_token", token)
}

export const removeAuthToken = () =>{
    localStorage.removeItem("auth_token")
}

const request = (method, url, data) =>{

    let headers = {}

    if(getAuthToken() !== null && getAuthToken() !== "null"){
        console.log(getAuthToken())
        headers = {"Authorization": `Bearer ${getAuthToken()}`}
    }

    return axiosConfig({
        method: method,
        headers:headers,
        url:url,
        data: data
    })
}

export default request;