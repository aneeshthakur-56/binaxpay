// src/utils/api.js
import axios from 'axios'; 
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,//'https://api.coinp2ptrader.com/api/',
});
// import { toast } from 'react-toastify';
api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token');
  if (token) config.headers['Authorization'] = "Bearer "+token;
  return config;
});

// api.interceptors.response.use(
//   res => {console.log( ' eeee ') , res},
//   err => {
//     if (err.response?.status === 401) localStorage.removeItem('auth_token');
//     return Promise.reject(err);
//   }
// );

// export const getData = (url, params) => api.get(url, { params }); 

export const getData = async(url , params ) => {
  try{
    const response = await api.get(url, {params});
    return response;
  }catch (error){
    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      'Something went wrong';

    // Optionally remove token if unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('isAuthenticated')
    }

    // Throw custom error to show in UI
    throw new Error(errorMessage);
  }
}
 
export const postData = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    console.error('❌ Error:', error);

    // Get server message if available
    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      'Something went wrong';

    // Optionally remove token if unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
    }

    // Throw custom error to show in UI
    throw new Error(errorMessage);
  }
};

export default api;
