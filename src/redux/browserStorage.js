import jwtDecode from 'jwt-decode'

const browserStorage = {
  setToken: () => {
    console.info('SET_TOKEN')
  },

  getToken: () => {
    console.info('GET_TOKEN')
  }
}

export default browserStorage
