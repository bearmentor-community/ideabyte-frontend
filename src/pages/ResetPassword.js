import React from 'react'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'
import Link from '../components/Link'

const Login = () => {
  return (
    <PageSimple>
      <Meta title="Reset Password" />

      <Center>
        <form>
          <p>RESET YOUR PASSWORD</p>
          <p>
            <Link to="/register">Back to Register</Link>
          </p>
          <p>
            <Link to="/login">Back to Login</Link>
          </p>
        </form>
      </Center>
    </PageSimple>
  )
}

export default Login
