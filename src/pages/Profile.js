import React from 'react'
import styled from '@emotion/styled'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import Button from '../components/Button'

const Center = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  display: flex;
`

const SubSection = styled.section`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Avatar = styled.img`
  height: 100px;
  background: #fafafa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 10px;
`

const Name = styled.h2`
  border-bottom: 2px solid hsla(45, 86%, 62%, 1);
  font-size: 30px;
  font-weight: normal;
  padding-bottom: 10px;
  margin: 0;
  margin-bottom: 10px;
`
const Email = styled.h3`
  font-weight: normal;
  margin: 0;
`

const Profile = () => {
  const user = {
    avatar: '/assets/images/avatar.jpg',
    name: 'Joen Doe',
    email: 'joendoe@example.com'
  }

  return (
    <PageSimple>
      <Meta title="My Profile" />
      <Center>
        <Section>
          <Avatar src={user.avatar} alt={`User Avatar of ${user.name}`} />
          <SubSection>
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </SubSection>
        </Section>

        <Section>
          <Button backgroundColor="red" color="white">
            Logout
          </Button>
        </Section>
      </Center>
    </PageSimple>
  )
}

export default Profile
