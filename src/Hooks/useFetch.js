import {useState} from 'react';

const useFetch = () => {
    // states
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    // function request
    const request = (url, Method, body, headers) => {
        try {
            setLoading(true);
            // turning method to standart
            const method = Method.tuUpperCase();
            // adding needed headers
            headers['Content-Type'] = 'application/json';

            if (method === 'GET'){
                const response = await fetch(url, {method, headers});
                const res = await response.json();
                setData(res.data);
                setLoading(false);
                return res.data;  
            }

            setMessage(null);
            const response = await fetch(url, {method, headers, body: JSON.stringify(body)});
            const res = await response.json();
            setMessage(res.message);
            setLoading(false);
            return res.message;
        }
        catch (err){
            setError(err);
            setLoading(false);
            return err;
        }
    }

    // function for clearing the error
    const clearError = () => {
        setError(null);
    }

    const clearMessage = () => {
        setMessage(null);
    }
    
    return {loading, data, error, message, request, clearError, clearMessage};
} 


export default useFetch;