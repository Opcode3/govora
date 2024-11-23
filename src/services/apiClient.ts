import axios, { AxiosResponse, AxiosError } from 'axios';



// Create an Axios instance (optional)
const apiClient = axios.create({
  baseURL: '',
  withCredentials: true, // Include credentials if needed
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
        console.log("It's crossed my path")
    //   if (error.response.status === 401) {
    //     window.location.href = '/'; // Redirect to login or home page
    //   }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

