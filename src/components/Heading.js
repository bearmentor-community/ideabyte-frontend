import React from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

const Heading = ({ size, align, scheme, margin, children }) => {
  const base = css`
    text-align: ${align ? 'left' : 'center'};
    color: ${scheme === 'dark' ? '#fff' : '#333'};
    margin: ${margin ? margin : '30px 0'};
  `

  const Heading1 = styled.h1`
    ${base}
  `

  const Heading2 = styled.h2`
    ${base}
  `

  const Heading3 = styled.h3`
    ${base}
  `

  if (size === 1) {
    return <Heading1 scheme={scheme}>{children}</Heading1>
  } else if (size === 2) {
    return <Heading2 scheme={scheme}>{children}</Heading2>
  } else if (size === 3) {
    return <Heading3 scheme={scheme}>{children}</Heading3>
  }
}

export default Heading
