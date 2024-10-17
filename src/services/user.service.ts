import axios from "axios";
import {IUser} from "../models/IUser";

export let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getUsers = async ():Promise<IUser[]> =>{
    let axiosResponse = await axiosInstance.get<IUser[]>('/users')
    return axiosResponse.data
}
