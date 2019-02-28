const browserStorage = {
  // Set key's value into storage
  // doesn't need to return
  setKey: (keyName, value) => {
    localStorage.setItem(keyName, JSON.stringify(value))
  },

  // Get key's value from storage
  // return the value
  getKey: keyName => {
    return JSON.parse(localStorage.getItem(keyName))
  },

  // Remove key from the storage
  removeKey: keyName => {
    return localStorage.removeItem(keyName)
  }
}

export default browserStorage
