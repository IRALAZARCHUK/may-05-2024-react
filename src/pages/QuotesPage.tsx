import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";
import {IQuote} from "../models/IQuote";
import {apiService} from "../services/api.service";
import PaginationComponent from "../components/Pagination/Pagination";
import Quotes from "../components/Quotes/Quotes";

const QuotesPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const [quotes, setQuotes] = useState<IQuote[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            apiService.quotes
                .getAll(+page)
                .then(value => {
                    setQuotes(value.quotes);
                    const lastId = value.quotes[value.quotes.length - 1].id
                    if (lastId >= value.total) {
                        setFlag(true);
                    } else setFlag(false);
                });
        }


    }, [query]);

    return (
        <div>
            <Quotes quotes={quotes}/>
            <PaginationComponent flag={flag}/>
            <Outlet/>
        </div>

    )
}

export default QuotesPage;