import jwtDecode from 'jwt-decode'

const browserStorage = {
  setToken: token => {
    console.info('SET_TOKEN')
    localStorage.setItem('token', token)
  },

  getToken: () => {
    console.info('GET_TOKEN')
    localStorage.getItem('token')
  }
}

export default browserStorage
