import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, {signal: abortController.signal})
            .then((response) => {
                console.log(response);
                if (!response.ok){throw Error('Could not fetch blogs')}
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setIsError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('Fetch has been aborted');
                } else {
                    setIsError(err.message);
                    console.log(err.message);
                    setIsLoading(false);
                }
            })
        return () => abortController.abort();
    }, [url]);

    return {data, isLoading, isError};
}

export default useFetch;