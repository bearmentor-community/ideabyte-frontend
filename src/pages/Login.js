import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import FormLogin from '../components/FormLogin'

const Login = () => {
  return (
    <PageSimple>
      <Meta title="Login Account" />
      <FormLogin />
    </PageSimple>
  )
}

export default Login
