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

const FormLogin = props => {
  // React Hooks
  // So we can use state without having to use class/extends syntax
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Submit function
  const onSubmit = event => {
    // Prevent page reload because of form
    event.preventDefault()

    // create action object to be used in dispatch()
    const action = {
      type: 'LOGIN_USER',
      payload: {
        email: email,
        password: password
      }
    }
    // dispatch action object to Redux reducer
    // it calls the reducer function in App.js
    props.dispatch(action)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Heading size={2} scheme="light">
        Login to your account
      </Heading>

      <HorizontalRule color="yellow" />

      <FormContent>
        {/* EMAIL */}
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

        {/* PASSWORD */}
        <FormFieldSet>
          <Label>Your password:</Label>
          <Input
            type="password"
            placeholder="your_secret_passsword"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
        </FormFieldSet>

        {/* SUBMIT BUTTON */}
        <InputSubmit
          block
          backgroundColor="yellow"
          type="submit"
          value="Login"
        />

        {/* EXTRA LINKS */}
        <Extra>
          <Link to="/register">
            <Span scheme="light" type="extra">
              Does not have an account yet? <b>Register here</b>
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
    latestResponse: state.latestResponse
  }
}

export default connect(mapStateToProps)(FormLogin)
