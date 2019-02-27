import jwtDecode from 'jwt-decode'

const browserStorage = {
  setToken: () => {
    console.log('SET_TOKEN')
  },

  getToken: () => {
    console.log('GET_TOKEN')
  }
}

export default browserStorage
