import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import FormRegister from '../components/FormRegister'

const Register = () => {
  return (
    <PageSimple>
      <Meta title="Register New Account" />
      <FormRegister />
    </PageSimple>
  )
}

export default Register
