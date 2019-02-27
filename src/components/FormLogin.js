import React from 'react'
import { connect } from 'react-redux'

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

const FormLogin = props => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        // create action object
        const action = {
          type: 'LOGIN_USER',
          payload: {
            email: 'email@example',
            password: 'password'
          }
        }
        // dispatch action object to Redux
        // call the reducer function's switch case from App.js
        props.dispatch(action)
      }}
    >
      <Heading size={2} scheme="light">
        Login to your account
      </Heading>

      <HorizontalRule color="yellow" />

      <FormContent>
        <h1>{props.user.name}</h1>

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

// GET DATA FROM REDUX STORE
// Function to map the specified state to componet's props
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(FormLogin)
