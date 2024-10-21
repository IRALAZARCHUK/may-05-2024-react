import axios from "axios";
import {IQuoteResponse} from "../models/IQuoteResponse";
import {IQuote} from "../models/IQuote";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
})

export const apiService  = {
    quotes: {
        getAll: async (page:number): Promise<IQuoteResponse & {quotes:IQuote[]}> => {
            const skip = (page-1)*30;

            const {data} = await axiosInstance.get<IQuoteResponse & {quotes:IQuote[]}>('/quotes', {
                params:{
                    skip: skip
                }
            })
            return data;
        }
    }
}