import axios from 'axios';

export const scenezAPI = axios.create({
  baseURL: 'http://localhost:8081/v1/api/',
});
