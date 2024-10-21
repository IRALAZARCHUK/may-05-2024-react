import {IQuote} from "../../models/IQuote";
import {FC} from "react";

type QuoteProps = {
    item: IQuote;
}

const Quote:FC<QuoteProps> = ({item}) => {
    return (
        <div>
            <h2>Quote: {item.quote}</h2>
            <p>ID: {item.id}</p>
            <p>Author: {item.author}</p>
        </div>

    )
}

export default Quote;