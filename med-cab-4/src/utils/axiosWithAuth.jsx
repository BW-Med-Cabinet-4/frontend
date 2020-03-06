import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        // config object
        baseURL: 'https://medcabapi.herokuapp.com/',
        headers: {
            Authorization: token,
        }
    });
}