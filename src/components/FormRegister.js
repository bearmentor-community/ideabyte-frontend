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
  background: hsla(145, 50%, 62%, 1);
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: hsla(145, 50%, 72%, 1);
  }
`

const FormExtra = styled.div`
  font-size: 12px;
  margin: 10px 0;
  text-align: center;
  color: #333;
`

const FormRegister = () => {
  return (
    <Form>
      <Heading size={2} scheme="light">
        Register for new account
      </Heading>
      <HorizontalRule />

      <FormContent>
        <FormFieldSet>
          <Label>Your full name:</Label>
          <Input type="text" placeholder="First Last" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your email address:</Label>
          <Input type="email" placeholder="yourname@domain.com" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Confirm your email address:</Label>
          <Input type="email" placeholder="yourname@domain.com" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your password:</Label>
          <Input type="password" placeholder="a_secret_password" />
        </FormFieldSet>

        <InputSubmit type="submit" value="Register" />

        <FormExtra>
          <Link to="/login">
            <Span scheme="light" type="extra">
              Already have an account? <b>Login here</b>
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

export default FormRegister
