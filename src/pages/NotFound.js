import React from 'react'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'
import Link from '../components/Link'

const Profile = () => {
  return (
    <PageSimple>
      <Meta title="Page Not Found" />

      <Center>
        <h1>Sorry, page is not found.</h1>
        <p>
          <Link to="/">Please go back to our home</Link>
        </p>
      </Center>
    </PageSimple>
  )
}

export default Profile
