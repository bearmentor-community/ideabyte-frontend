import React from 'react'

import PageSimple from '../layouts/PageSimple'
import UserProfile from '../components/UserProfile'
import Meta from '../layouts/Meta'

const Profile = () => {
  return (
    <PageSimple>
      <Meta title="My Profile" />
      <UserProfile />
    </PageSimple>
  )
}

export default Profile
