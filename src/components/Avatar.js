import React from 'react'
import styled from '@emotion/styled'

const StyledAvatar = styled.img`
  height: 100px;
  background: #fafafa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 10px;
`

const Avatar = props => {
  return <StyledAvatar src={props.src} alt={props.alt} />
}

export default Avatar
