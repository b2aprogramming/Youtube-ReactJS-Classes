import { useRef, useState } from "react";

export interface UseApiProps {
    url: string;
}
export type UseApiReturModel = [(options?:RequestInit) => void, {data: any, isLoading: boolean, error: any}];

function useApi({url}: UseApiProps): UseApiReturModel {
    const BASE_URL = useRef('http://localhost:3000');

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);



    const invokeApi = (options?:RequestInit) => {
        setLoading(true);
        fetch(`${BASE_URL.current}${url}`, options).then((res) => {
            res.json().then((data) => {
                setData(data);
                setLoading(false);
            })
            
        }).catch((err) => {
           setError(err);
           setLoading(false);
        })
    }

    return [
        invokeApi, 
        {data, isLoading, error}
    ];
}

export default useApi;

