import React from 'react'
import styled from '@emotion/styled'

const StyledCenter = styled.div`
  margin-top: 10px;
  max-width: 1020px;
`

const Center = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>
}

export default Center
