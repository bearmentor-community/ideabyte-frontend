import React from 'react'

import styled from '@emotion/styled'

const StyledAnchor = styled.span`
  color: ${props => (props.scheme === 'dark' ? '#fff' : '#333')};
  transition: 0.5s;

  &:hover {
    color: ${props =>
      props.scheme === 'dark' ? 'hsla(0, 0%, 90%, 1)' : 'hsla(0, 0%, 30%, 1)'};
  }
`

const Anchor = ({ scheme, children }) => {
  return <StyledAnchor scheme="dark">{children}</StyledAnchor>
}

export default Anchor
