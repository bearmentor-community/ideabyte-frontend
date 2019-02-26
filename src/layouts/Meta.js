import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} - ` : ''}Idea Byte</title>
    </Helmet>
  )
}

export default Meta
