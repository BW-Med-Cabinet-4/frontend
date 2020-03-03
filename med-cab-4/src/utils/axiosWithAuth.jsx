import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        // config object
        baseURL: 'https://medcabinetbuild.herokuapp.com/api',
        headers: {
            Authorization: token,
        }
    });
}