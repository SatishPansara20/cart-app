import axios from "axios";

export const userURL = axios.create({
  baseURL: "http://202.131.117.92:7152/api",
});

// NOTE: Add a request interceptor
export const postRequestInterceptor = () => {
  userURL.interceptors.request.use(
    function (config) {
      console.log("From the request interceptor  ");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

//NOTE: Add a response interceptor
export const postResponseInterceptor = () => {
  userURL.interceptors.response.use(
    function (response) {
      console.log("From the response interceptor  ");
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};
