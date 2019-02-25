import React from 'react'

import { Link } from 'react-router-dom'

const MyLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>
}

export default MyLink
