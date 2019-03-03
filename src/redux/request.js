import axios from 'axios'

import browserStorage from './browserStorage'

const token = browserStorage.getKey('token') || null

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000',
  timeout: 2000,
  headers: {
    // will be replaced by actual token header
    Authorization: `Bearer ${token}` || '',
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
