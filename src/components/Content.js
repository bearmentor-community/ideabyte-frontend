import React from 'react'

import styled from '@emotion/styled'

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
  width: 100%;
`

const Content = ({ children }) => {
  return <Main>{children}</Main>
}

export default Content
