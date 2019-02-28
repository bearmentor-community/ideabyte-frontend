import jwtDecode from 'jwt-decode'

export const decodeToken = token => {
  if (token) return jwtDecode(token)
  else return null
}
