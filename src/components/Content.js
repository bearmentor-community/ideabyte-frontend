import React from 'react'

import styled from '@emotion/styled'

const Main = styled.main`
  width: ${props => (props.width ? props.width : '1000px')};
  margin: 0 auto;
  flex: 1;
`

const Content = ({ width, children }) => {
  return <Main width={width}>{children}</Main>
}

export default Content
