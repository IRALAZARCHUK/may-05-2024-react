import axios from "axios";
import {IComment} from "../models/IComment";

export let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getComments = async ():Promise<IComment[]> =>{
    let axiosResponse = await axiosInstance.get<IComment[]>('/comments')
    return axiosResponse.data
}
