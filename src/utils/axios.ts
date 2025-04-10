import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
  headers: {
    Authorization: 'Bearer ' + `${import.meta.env.VITE_API_TOKEN}`,
  },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    const { data } = error.response
    alert(`${data.code} ${data.message}`)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)
