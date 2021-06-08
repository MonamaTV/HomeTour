import { useState, useEffect } from 'react';
import axios from '../utils/axios';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const results = await axios.get(url);
            const { data, status } = results;
            if(status === 200) {
                setData(data);
                setError(null);
            }
            else {
                setError(data.message);
                setData(null);
            }
        };
        fetchData();
        setLoading(false);
    }, [url])
    return { data, loading, error }
};

export default useFetch;