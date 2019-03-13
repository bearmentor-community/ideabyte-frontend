import React from 'react'

import styled from '@emotion/styled'

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex: 1;
  width: 320px;

  @media all and (min-width: 1024px) {
    width: ${props => (props.width ? props.width : '1200px')};
  }

  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 800px;
  }

  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 600px;
  }

  @media all and (max-width: 480px) {
    width: 420px;
  }
`

const Content = ({ children }) => {
  return <Main>{children}</Main>
}

export default Content
