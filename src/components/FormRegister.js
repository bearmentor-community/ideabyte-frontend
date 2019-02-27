import React, { useState } from 'react'

import Heading from './Heading'
import Link from './Link'
import HorizontalRule from './HorizontalRule'
import Span from './Span'

import {
  Form,
  FormContent,
  FormFieldSet,
  Label,
  Input,
  InputSubmit,
  Extra
} from './FormStyledComponents'

const FormRegister = props => {
  // React Hooks
  // So we can use state without having to use class/extends syntax
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Submit function
  const onSubmit = event => {
    // Prevent page reload because of form
    event.preventDefault()

    // create action object to be used in dispatch()
    const action = {
      type: 'REGISTER_USER',
      payload: {
        name: name,
        email: email,
        password: password
      }
    }
    // dispatch action object to Redux reducer
    // it calls the reducer function in App.js
    props.dispatch(action)

    // Set name, email, password to empty again
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <Heading size={2} scheme="light">
        Register for new account
      </Heading>
      <HorizontalRule color="green" />

      <FormContent>
        <FormFieldSet>
          <Label>Your full name:</Label>
          <Input
            type="text"
            placeholder="First Last"
            onChange={event => {
              setName(event.target.value)
            }}
          />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your email address:</Label>
          <Input
            type="email"
            placeholder="yourname@domain.com"
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Your password:</Label>
          <Input
            type="password"
            placeholder="a_secret_password"
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
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
    </Form>
  )
}

export default FormRegister
