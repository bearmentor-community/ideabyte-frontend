import React, { useState } from 'react'
import { connect } from 'react-redux'

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

// Import register action thuk
import { registerUser } from '../redux/actions/register'

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

    // If all fields are exist
    if (name && email && password) {
      // dispatch payload object to Redux action
      // it calls the reducer function
      props.dispatch(
        // this is a thunk in actions
        registerUser({
          name: name,
          email: email,
          password: password
        })
      )
    } else {
      console.error('One of the register fields are not entered yet')
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Heading size={2} scheme="light">
        Register for new account
      </Heading>

      <HorizontalRule color="green" />

      <FormContent>
        {/* FULL NAME */}
        <FormFieldSet>
          <Label>Your full name:</Label>
          <Input
            type="text"
            placeholder="First Last"
            value={name}
            onChange={event => {
              setName(event.target.value)
            }}
          />
        </FormFieldSet>

        {/* EMAIL */}
        <FormFieldSet>
          <Label>Your email address:</Label>
          <Input
            type="email"
            placeholder="yourname@domain.com"
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
        </FormFieldSet>

        {/* PASSWORD */}
        <FormFieldSet>
          <Label>Your password:</Label>
          <Input
            type="password"
            placeholder="a_secret_password"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
        </FormFieldSet>

        {/* SUBMIT BUTTON */}
        <InputSubmit
          block
          backgroundColor="green"
          type="submit"
          value="Register"
        />

        {/* EXTRA LINKS */}
        <Extra>
          <Link to="/login">
            <Span scheme="light" type="extra">
              Already have an account? <b>Login here</b>
            </Span>
          </Link>
        </Extra>
        <Extra>
          <Link to="/reset-password">
            <Span scheme="light" type="extra">
              Forgot your password? <b>Reset here</b>
            </Span>
          </Link>
        </Extra>
      </FormContent>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    register: state.latestResponse
  }
}

export default connect(mapStateToProps)(FormRegister)
