import axios from 'axios';

const networkInstance = axios.create({
  baseURL: '',
});

networkInstance.interceptors.request.use(request => request);
networkInstance.interceptors.response.use(response => response);

export default networkInstance;
