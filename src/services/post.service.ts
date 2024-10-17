import axios from "axios";
import {IPost} from "../models/IPost";

export let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async ():Promise<IPost[]> =>{
    let axiosResponse = await axiosInstance.get<IPost[]>('/posts')
    return axiosResponse.data
}
