import React from 'react'
import styled from '@emotion/styled'

import Avatar from './Avatar'

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

const UserProfile = props => {
  // this user profile will be rendered if user is authenticated
  // check the Profile page
  return (
    <Center>
      <Section>
        <Avatar
          src="/assets/images/avatar.jpg"
          alt={`User Avatar of ${props.name}`}
        />
        <SubSection>
          <Name>{props.name ? props.name : '.....'}</Name>
          <Email>{props.email ? props.email : '.....'}</Email>
        </SubSection>
      </Section>
    </Center>
  )
}

export default UserProfile
