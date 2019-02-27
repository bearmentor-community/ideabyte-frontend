import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000',
  timeout: 1000,
  headers: {
    Authorization: 'abcdef', // will be replaced by actual token header
    'X-Custom-Header': 'ideabyte-frontend'
  }
})

const request = async ({ method, url, data }) => {
  try {
    const response = await axiosInstance({
      method: method || 'get', // either get, post, delete, put
      url: url || '/',
      data: data || {}
    })
    return response
  } catch (error) {
    return error
  }
}

export default request
