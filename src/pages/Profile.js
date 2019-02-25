import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'

const Profile = () => {
  return (
    <PageSimple>
      <Meta title="My Profile" />
      <section>
        <img src="/assets/images/avatar.jpg" alt="User Avatar" />
        <h2>Joen Doe</h2>
        <h3>joendoe@example.com</h3>
      </section>

      <section>
        <button>Logout</button>
      </section>
    </PageSimple>
  )
}

export default Profile
