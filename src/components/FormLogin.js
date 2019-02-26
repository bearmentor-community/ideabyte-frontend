import React from 'react'

import Heading from './Heading'
import Link from './Link'
import HorizontalRule from './HorizontalRule'
import Span from './Span'

import {
  FormContent,
  FormFieldSet,
  Label,
  Input,
  InputSubmit,
  Extra
} from './FormStyledComponents'

const FormLogin = () => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <Heading size={2} scheme="light">
        Login to your account
      </Heading>

      <HorizontalRule color="yellow" />

      <FormContent>
        <FormFieldSet>
          <Label>Your email address:</Label>
          <Input type="email" placeholder="yourname@domain.com" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your password:</Label>
          <Input type="password" placeholder="your_secret_passsword" />
        </FormFieldSet>

        <InputSubmit
          block
          backgroundColor="yellow"
          type="submit"
          value="Login"
        />

        <Extra>
          <Link to="/register">
            <Span scheme="light" type="extra">
              Does not have an account yet? <b>Register here</b>
            </Span>
          </Link>
        </Extra>

        <Extra>
          <Link to="/">
            <Span scheme="light" type="extra">
              Forgot your password? <b>Reset here</b>
            </Span>
          </Link>
        </Extra>
      </FormContent>
    </form>
  )
}

export default FormLogin
