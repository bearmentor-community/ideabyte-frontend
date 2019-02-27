// import jwtDecode from 'jwt-decode'

const browserStorage = {
  // Set key's value into storage
  // doesn't need to return
  setKey: (keyName, value) => {
    localStorage.setItem(keyName, value)
  },

  // Get key's value from storage
  // return the value
  getKey: keyName => {
    return localStorage.getItem(keyName)
  },

  decodeToken: token => {
    // use jwtDecode
  }
}

export default browserStorage
