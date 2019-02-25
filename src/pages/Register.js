import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import Link from '../components/Link'

const Register = () => {
  return (
    <PageSimple>
      <Meta title="Register New Account" />
      <section>
        <h2>Register for new account</h2>

        <form>
          <div>
            <label>Your full name:</label>
            <input type="text" />
          </div>

          <div>
            <label>Your email address:</label>
            <input type="email" />
          </div>

          <div>
            <label>Confirm your email address:</label>
            <input type="email" />
          </div>

          <div>
            <label>Your password:</label>
            <input type="password" />
          </div>

          <input type="submit" value="Register" />
        </form>

        <p>
          <Link to="/login">
            Already have an account? <b>Login here</b>
          </Link>
        </p>
      </section>
    </PageSimple>
  )
}

export default Register
