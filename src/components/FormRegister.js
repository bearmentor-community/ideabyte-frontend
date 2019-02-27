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

const FormRegister = () => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <Heading size={2} scheme="light">
        Register for new account
      </Heading>
      <HorizontalRule color="green" />

      <FormContent>
        <FormFieldSet>
          <Label>Your full name:</Label>
          <Input type="text" placeholder="First Last" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your email address:</Label>
          <Input type="email" placeholder="yourname@domain.com" />
        </FormFieldSet>

        {/* <FormFieldSet>
          <Label>Confirm your email address:</Label>
          <Input type="email" placeholder="yourname@domain.com" />
        </FormFieldSet> */}

        <FormFieldSet>
          <Label>Your password:</Label>
          <Input type="password" placeholder="a_secret_password" />
        </FormFieldSet>

        <InputSubmit
          block
          backgroundColor="green"
          type="submit"
          value="Register"
        />

        <Extra>
          <Link to="/login">
            <Span scheme="light" type="extra">
              Already have an account? <b>Login here</b>
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

export default FormRegister
