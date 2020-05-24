import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://react-burger-6b71a.firebaseio.com'
});

export default instance;