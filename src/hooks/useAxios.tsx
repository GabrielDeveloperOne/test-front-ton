import { useState, useEffect, SetStateAction } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com'

export const useAxios = (axiosParams: AxiosRequestConfig<any>) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig<any>) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return { response, error, loading };
};