import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7187'
});



export default api;