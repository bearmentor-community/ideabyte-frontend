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

  // Remove key from the storage
  removeKey: keyName => {
    return localStorage.removeItem(keyName)
  },

  decodeToken: token => {
    // use jwtDecode
  }
}

export default browserStorage
