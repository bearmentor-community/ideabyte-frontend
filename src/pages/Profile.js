import React from 'react'
import styled from '@emotion/styled'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import Button from '../components/Button'

const Section = styled.section`
  display: flex;
`

const Profile = () => {
  return (
    <PageSimple>
      <Meta title="My Profile" />
      <Section>
        <img src="/assets/images/avatar.jpg" alt="User Avatar" />
        <h2>Joen Doe</h2>
        <h3>joendoe@example.com</h3>
      </Section>

      <Section>
        <Button color="red">Logout</Button>
      </Section>
    </PageSimple>
  )
}

export default Profile
