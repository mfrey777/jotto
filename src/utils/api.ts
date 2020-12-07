import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
  responseType: 'json',
});

// api.interceptors.request.use(request => {
//   console.log('api.interceptors.request: ', JSON.stringify(request, null, 2))
//   return request
// })

// api.interceptors.response.use(response => {
//   console.log('api.interceptors.response: ', JSON.stringify(response, null, 2))
//   return response
// })