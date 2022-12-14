import { useFetch, useCounter } from "../hooks/";
import { BRQuote, LoadingQuote} from "./components";


export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ?
                        <LoadingQuote /> 
                    : 
                        <BRQuote quote={ quote } author={ author }/>
            }
            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)}>
                Next quote!
            </button>
        </>
    );
};
