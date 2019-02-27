import React from 'react'

import styled from '@emotion/styled'

const Main = styled.main`
  margin: 0 auto;
  flex: 1;

  @media all and (min-width: 1024px) and (max-width: 1280px) {
    width: ${props => (props.width ? props.width : '1000px')};
  }

  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 800px;
  }

  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 500px;
  }

  @media all and (max-width: 480px) {
    width: 480px;
  }
`

const Content = ({ width, children }) => {
  return <Main width={width}>{children}</Main>
}

export default Content
