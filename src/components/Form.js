import React from 'react'
import styled from '@emotion/styled'

const StyledForm = styled.form`
  width: 500px;
  margin: 0 auto;
`

const Form = ({ children }) => {
  return (
    <StyledForm
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      {children}
    </StyledForm>
  )
}

export default Form
