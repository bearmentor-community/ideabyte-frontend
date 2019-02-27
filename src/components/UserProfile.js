import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import Button from './Button'
import Avatar from './Avatar'

import { logoutUser } from '../redux/actions/logout'

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
  const logout = () => {
    // only logoutUser if the user is actually authenticated
    if (props.user.isAuthenticated) {
      props.dispatch(logoutUser(props.user))
    }
  }

  if (props.user.isAuthenticated) {
    return (
      <Center>
        <Section>
          <Avatar
            src="/assets/images/avatar.jpg"
            alt={`User Avatar of ${props.user.name}`}
          />
          <SubSection>
            <Name>{props.user.name}</Name>
            <Email>{props.user.email}</Email>
          </SubSection>
        </Section>

        <Section>
          <Button backgroundColor="green" color="white">
            Post Idea
          </Button>
          <Button onClick={logout} backgroundColor="red" color="white">
            Logout
          </Button>
        </Section>
      </Center>
    )
  } else {
    props.dispatch(push('/'))

    return (
      <Center>
        <Section>YOU ARE NOT LOGGED IN. REDIRECTING...</Section>
      </Center>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserProfile)
