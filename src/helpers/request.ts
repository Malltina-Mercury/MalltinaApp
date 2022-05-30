import axios from 'axios';
import {BASE_URL} from './constants';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  config => {
    //TODO: add auth token
    return config;
  },
  error => Promise.reject(error),
);

export default request;
