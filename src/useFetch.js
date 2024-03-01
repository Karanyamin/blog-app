import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                console.log(response);
                if (!response.ok){throw Error('Could not fetch blogs')}
                return response.json();
            })
            .then((data) => {
                setData(data);
                console.log(data);
                setIsLoading(false);
                setIsError(null);
            })
            .catch(err => {
                setIsError(err.message);
                console.log(err.message);
                setIsLoading(false);

            })
    }, [url]);

    return {data, isLoading, isError};
}

export default useFetch;