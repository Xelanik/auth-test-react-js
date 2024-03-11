import axios from "axios";
import { toast } from "react-toastify";

const options = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const client = axios.create(options);

client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.data?.detail && Array.isArray(error.response.data.detail)) {
      error.response.data.detail.map((el: { field_name: string; error: string }) => {
        toast.error(`${el.field_name}: ${el.error}`);
      });
    } else if (error.response.data?.detail) {
      toast.error(error.response.data?.detail);
    }

    return Promise.reject(error);
  }
);

export default client;
