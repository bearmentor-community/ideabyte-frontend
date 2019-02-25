import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import Link from '../components/Link'

const Login = () => {
  return (
    <PageSimple>
      <Meta title="Login Account" />
      <section>
        <h1>Login to your account</h1>

        <form>
          <div>
            <label>Your email address:</label>
            <input type="email" />
          </div>

          <div>
            <label>Your password:</label>
            <input type="password" />
          </div>

          <input type="submit" value="Login" />
        </form>

        <p>
          <Link to="/register">
            Does not have an account yet? <b>Register here</b>
          </Link>
        </p>

        <p>
          <Link to="/">
            Forgot your password? <b>Reset here</b>
          </Link>
        </p>
      </section>
    </PageSimple>
  )
}

export default Login
