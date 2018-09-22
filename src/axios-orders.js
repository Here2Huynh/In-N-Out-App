import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://in-n-out-app.firebaseio.com/'
});

export default instance;

