import React from 'react'

import styled from '@emotion/styled'

const Main = styled.main`
  width: 1000px;
  margin: 0 auto;
  flex: 1;
`

const Content = ({ children }) => {
  return <Main>{children}</Main>
}

export default Content
