import React from 'react'
import styled from '@emotion/styled'

import Form from './Form'
import Heading from './Heading'
import Link from './Link'
import HorizontalRule from './HorizontalRule'
import Span from './Span'

const FormContent = styled.div`
  margin: 30px;
  margin-top: 30px;
`

const FormFieldSet = styled.div`
  margin: 20px 0;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  padding: 10px;
  border: 2px solid #bdbdbd;
  border-radius: 4px;
  width: 100%;
`

const InputSubmit = styled.input`
  padding: 15px;
  background: hsla(45, 86%, 62%, 1);
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: hsla(45, 86%, 72%, 1);
  }
`

const FormExtra = styled.div`
  font-size: 12px;
  margin: 10px 0;
  text-align: center;
  color: #333;
`

const FormLogin = () => {
  return (
    <Form>
      <Heading size={2} scheme="light">
        Login to your account
      </Heading>
      <HorizontalRule />

      <FormContent>
        <FormFieldSet>
          <Label>Your email address:</Label>
          <Input type="email" placeholder="yourname@domain.com" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your password:</Label>
          <Input type="password" />
        </FormFieldSet>

        <InputSubmit type="submit" value="Login" />

        <FormExtra>
          <Link to="/register">
            <Span scheme="light" type="extra">
              Does not have an account yet? <b>Register here</b>
            </Span>
          </Link>
        </FormExtra>

        <FormExtra>
          <Link to="/">
            <Span scheme="light" type="extra">
              Forgot your password? <b>Reset here</b>
            </Span>
          </Link>
        </FormExtra>
      </FormContent>
    </Form>
  )
}

export default FormLogin
