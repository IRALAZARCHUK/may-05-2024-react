import {IQuote} from "../../models/IQuote";
import {FC} from "react";
import Quote from "../Quote/Quote";

type QuotesProps = {
    quotes: IQuote[];
}

const Quotes:FC<QuotesProps> = ({quotes}) => {
    return (
        <div>
            {
                quotes.map((item, index) => <Quote key={index} item={item}/>)
            }
        </div>

    )
}

export default Quotes;