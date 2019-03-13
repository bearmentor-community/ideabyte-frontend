import React from 'react'
import styled from '@emotion/styled'

const StyledCenter = styled.div`
  width: 800px;
`

const CenterStick = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>
}

export default CenterStick
