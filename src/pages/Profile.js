import React from 'react'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'
import UserProfile from '../components/UserProfile'
import UserIdeas from '../components/UserIdeas'

const Profile = () => {
  return (
    <PageSimple>
      <Meta title="My Profile" />

      <Center>
        <UserProfile />
        <UserIdeas />
      </Center>
    </PageSimple>
  )
}

export default Profile
