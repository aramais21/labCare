const BACKEND_URL = process.env.REACT_APP_BACKEND;

const fetchData = async (path) => {
    try{
        const headers = {};
        headers['Content-Type'] = 'application/json';
        const response = await fetch(`${BACKEND_URL}${path}`,{method: 'GET',headers});
        const res = await response.json();
        return res.data;
    }
    catch (err) {
        return err;
    }
}

export const postData = async (path, body) => {
    try {
        const headers = {};
        headers['Content-Type'] = 'application/json';
        headers['token'] = localStorage.getItem('token');
        const response = await fetch(`${BACKEND_URL}${path}`,{method: 'POST',headers, body: JSON.stringify(body)});
        const res = await response.json();
        if(res.error && res.error === '') {
            localStorage.removeItem('token');
        }
        return res;        
    }
    catch (err) {
        return err;
    }
}

export const deleteData = async (path, id) => {
    try {
        const headers = {};
        headers['Content-Type'] = 'application/json';
        headers['token'] = localStorage.getItem('token');
        const response = await fetch(`${BACKEND_URL}${path}/${id}`,{method: 'DELETE', headers});
        const res  = await response.json();
        if(res.error && res.error === '') {
            localStorage.removeItem('token');
        } 
        return res;
    }
    catch (err) {
        return err;
    }
} 

export const updateData = async (path, id, formData) => {
    try {
        const headers = {};
        headers['Content-Type'] = 'application/json';
        headers['token'] = localStorage.getItem('token');
        const body = await JSON.stringify(formData);
        const response = await fetch(`${BACKEND_URL}${path}/${id}`,{method: 'PUT', headers, body});
        const res  = await response.json();
        if(res.error && res.error === '') {
            localStorage.removeItem('token');
        } 
        return res;
    }
    catch (err) {
        return err;
    }
}

export default fetchData;